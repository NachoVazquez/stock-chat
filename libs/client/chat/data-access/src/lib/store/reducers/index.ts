import { Action, combineReducers, createFeatureSelector } from '@ngrx/store';

import * as fromChannel from './channel.reducer';
import * as fromMessage from './message.reducer';

export const chatFeatureKey = 'chat';

export interface ChatState {
  [fromChannel.channelFeatureKey]: fromChannel.State;
  [fromMessage.messageFeatureKey]: fromMessage.State;
}

export interface State {
  [chatFeatureKey]: ChatState;
}

export function reducers(state: ChatState | undefined, action: Action) {
  return combineReducers({
    [fromChannel.channelFeatureKey]: fromChannel.reducer,
    [fromMessage.messageFeatureKey]: fromMessage.reducer,
  })(state, action);
}

export const selectChatState = createFeatureSelector<State, ChatState>(
  chatFeatureKey
);
