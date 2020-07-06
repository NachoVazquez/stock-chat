import { createAction, props } from '@ngrx/store';

import { MessageDTO } from '@stock-chat/shared/dtos';

export const getMessages = createAction('[MessageList] Get Messages');

export const getMessagesSuccess = createAction(
  '[Message] Get Messages Success',
  props<{ messages: MessageDTO[] }>()
);

export const getMessagesFailure = createAction('[Message Get Messages Failure');
