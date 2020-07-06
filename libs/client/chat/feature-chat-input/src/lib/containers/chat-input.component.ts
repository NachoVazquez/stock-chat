import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take, withLatestFrom } from 'rxjs/operators';

import {
  ChannelSelectors,
  ChatService,
  reducers as fromChat,
} from '@stock-chat/client/chat/data-access';
import { ChannelDTO, UserDTO } from '@stock-chat/shared/dtos';
import {
  AuthSelectors,
  reducers as fromAuth,
} from '@stock-chat/client/shared/auth/data-access';

@Component({
  selector: 'stock-chat-chat-input',
  template: `<stock-chat-chat-input-ui
    (sendMessage)="addNewMessage($event)"
  ></stock-chat-chat-input-ui>`,
})
export class ChatInputComponent {
  currentChannel$: Observable<ChannelDTO>;
  loggedUser$: Observable<UserDTO>;

  constructor(
    private readonly chatService: ChatService,
    private readonly store$: Store<fromChat.State | fromAuth.State>
  ) {
    this.currentChannel$ = this.store$.select(
      ChannelSelectors.selectCurrentChannel
    );
    this.loggedUser$ = this.store$.select(AuthSelectors.selectLoggedUser);
  }

  addNewMessage(message: string): void {
    this.currentChannel$
      .pipe(withLatestFrom(this.loggedUser$), take(1))
      .subscribe({
        next: ([channel, user]) => {
          this.chatService.sendMessage({ message, user }, channel._id);
        },
      });
  }
}
