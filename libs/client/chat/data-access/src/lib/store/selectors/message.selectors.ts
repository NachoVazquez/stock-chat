import { createSelector } from '@ngrx/store';

import { selectChatState } from '../reducers/index';
import * as fromMessage from '../reducers/message.reducer';

export const selectMessageSliceState = createSelector(
  selectChatState,
  (state) => state.message
);

export const selectMessageIds = createSelector(
  selectMessageSliceState,
  fromMessage.selectMessageIds
);

export const selectMessageEntities = createSelector(
  selectMessageSliceState,
  fromMessage.selectMessageEntities
);

export const selectAllMessages = createSelector(
  selectMessageSliceState,
  fromMessage.selectAllMessages
);

export const selectMessageTotal = createSelector(
  selectMessageSliceState,
  fromMessage.selectMessageTotal
);
