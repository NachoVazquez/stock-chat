import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { from, Observable, of } from 'rxjs';
import { Server, Socket } from 'socket.io';

import { ChannelsService } from '@stock-chat/api/channels/domain';
import { JwtService } from '@stock-chat/api/shared/auth/domain-jwt';
import { User } from '@stock-chat/api/shared/user/domain-user';

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
    const user: User = await this.jwtService.verify(
      socket.handshake.query.token,
      true
    );

    this.connectedUsers = [...this.connectedUsers, String(user._id)];

    // Send list of connected users
    this.server.emit('users', this.connectedUsers);
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
    @MessageBody() data: any
  ): Observable<WsResponse<any>> {
    const event = 'message';
    console.log(data);

    const result = data[0];

    from(
      this.channelsService.addMessage(result.message, result.channels)
    ).subscribe({
      next: () => {},
    });
    client.broadcast.to(result.channels).emit(event, result.message);

    return of({ event, data: result.message });
  }

  @SubscribeMessage('join')
  async onRoomJoin(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: any
  ): Promise<void> {
    client.join(data[0]);

    const messages = await this.channelsService.findMessages(data, 50);

    // Send last messages to the connected user
    client.emit('message', messages);
  }

  @SubscribeMessage('leave')
  onRoomLeave(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: any
  ): void {
    client.leave(data[0]);
  }
}
