import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsException,
  WsResponse,
} from '@nestjs/websockets';
import { from, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Server, Socket } from 'socket.io';

import { ChannelsService } from '@stock-chat/api/channels/domain';
import { JwtService } from '@stock-chat/api/shared/auth/domain-jwt';
import { User } from '@stock-chat/api/shared/user/domain-user';
import { CreateMessageDTO, MessageDTO } from '@stock-chat/shared/dtos';

@WebSocketGateway({ namespace: 'channels' })
export class ChatEngineGateway
  implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  connectedUsers: string[] = [];

  constructor(
    private jwtService: JwtService,
    private channelsService: ChannelsService
  ) {}

  async handleConnection(socket: Socket) {
    try {
      const user: User = await this.jwtService.verify(
        socket.handshake.query.token,
        true
      );

      this.connectedUsers = [...this.connectedUsers, String(user._id)];

      // Send list of connected users
      this.server.emit('users', this.connectedUsers);
    } catch (error) {
      throw new WsException('error authticating');
    }
  }

  async handleDisconnect(socket: Socket) {
    const user: User = await this.jwtService.verify(
      socket.handshake.query.token,
      true
    );
    const userPos = this.connectedUsers.indexOf(String(user._id));

    if (userPos > -1) {
      this.connectedUsers = [
        ...this.connectedUsers.slice(0, userPos),
        ...this.connectedUsers.slice(userPos + 1),
      ];
    }

    // Sends the new list of connected users
    this.server.emit('users', this.connectedUsers);
  }

  @SubscribeMessage('message')
  onMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { message: CreateMessageDTO; channelId: string }
  ): Observable<WsResponse<any>> {
    const event = 'message';

    const { message } = data;
    const newMessage: Partial<MessageDTO> = {
      ...message,
      created_at: new Date(),
    };

    return from(
      this.channelsService.addMessage(newMessage as MessageDTO, data.channelId)
    ).pipe(
      map((channel) => channel.messages),
      tap((chMessages) => {
        client.broadcast
          .to(data.channelId)
          .emit(event, chMessages.slice(Math.max(chMessages.length - 50, 0)));
      }),
      map((chMessages) => ({
        event,
        data: chMessages.slice(Math.max(chMessages.length - 50, 0)),
      }))
    );
  }

  @SubscribeMessage('join')
  async onRoomJoin(
    @ConnectedSocket() client: Socket,
    @MessageBody() channelId: string
  ): Promise<void> {
    client.join(channelId);

    const messages = await this.channelsService.findMessages(channelId, 50);

    // Send last messages to the connected user
    client.emit('message', messages);
  }

  @SubscribeMessage('leave')
  onRoomLeave(
    @ConnectedSocket() client: Socket,
    @MessageBody() channelId: string
  ): void {
    client.leave(channelId);
  }
}
