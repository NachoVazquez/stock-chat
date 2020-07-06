import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

import { CreateMessageDTO, MessageDTO, UserDTO } from '@stock-chat/shared/dtos';

@Injectable({ providedIn: 'root' })
export class ChatService {
  constructor(private socket: Socket) {}

  joinChannel(channelId: string): void {
    this.socket.emit('join', channelId);
  }

  leaveChannel(channelId: string): void {
    this.socket.emit('leave', channelId);
  }

  getMessages(): Observable<MessageDTO[]> {
    return this.socket.fromEvent('message');
  }

  getLoggedUsers(): Observable<UserDTO[]> {
    return this.socket.fromEvent('users');
  }

  sendMessage(message: CreateMessageDTO, channelId: string): void {
    this.socket.emit('message', { message, channelId });
  }
}
