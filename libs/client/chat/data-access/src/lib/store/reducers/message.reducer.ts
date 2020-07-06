import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { MessageDTO } from '@stock-chat/shared/dtos';

import { MessageListActions } from '../actions';

export const messageFeatureKey = 'message';

export interface State extends EntityState<MessageDTO> {}

export const adapter = createEntityAdapter<MessageDTO>({
  selectId: (message) => message._id,
});

export const initialState: State = adapter.getInitialState({});

export const reducer = createReducer<State>(
  initialState,
  on(MessageListActions.getMessagesSuccess, (state, { messages }) =>
    adapter.setAll(messages, { ...state, selectedMessageId: undefined })
  )
);

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

// select the array of user ids
export const selectMessageIds = selectIds;

// select the dictionary of user entities
export const selectMessageEntities = selectEntities;

// select the array of users
export const selectAllMessages = selectAll;

// select the total user count
export const selectMessageTotal = selectTotal;
