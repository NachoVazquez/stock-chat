import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import {
  ChatService,
  ChannelSelectors,
} from '@stock-chat/client/chat/data-access';
import {
  MessageListActions,
  MessageSelectors,
  reducers as fromMessage,
} from '@stock-chat/client/chat/data-access';
import { MessageDTO } from '@stock-chat/shared/dtos';

@Component({
  selector: 'stock-chat-message-list',
  template: `<stock-chat-message-list-ui
    [messages]="messages$ | async"
    [channelId]="currentChannelId$ | async"
  ></stock-chat-message-list-ui>`,
})
export class MessageListComponent implements OnDestroy {
  destroy$ = new Subject<void>();
  messages$: Observable<MessageDTO[]>;
  currentChannelId$: Observable<string>;

  constructor(
    private readonly chatService: ChatService,
    private readonly store$: Store<fromMessage.State>
  ) {
    this.messages$ = this.store$.select(MessageSelectors.selectAllMessages);
    this.currentChannelId$ = this.store$.select(
      ChannelSelectors.selectCurrentChannelId
    );

    this.chatService
      .getMessages()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (messages) => {
          this.store$.dispatch(
            MessageListActions.getMessagesSuccess({ messages })
          );
        },
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
