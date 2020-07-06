import { createSelector } from '@ngrx/store';

import * as fromChannel from '../reducers/channel.reducer';
import { selectChatState } from '../reducers/index';

export const selectChannelSliceState = createSelector(
  selectChatState,
  (state) => state.channel
);

export const selectChannelIds = createSelector(
  selectChannelSliceState,
  fromChannel.selectChannelIds
);

export const selectChannelEntities = createSelector(
  selectChannelSliceState,
  fromChannel.selectChannelEntities
);

export const selectAllChannels = createSelector(
  selectChannelSliceState,
  fromChannel.selectAllChannels
);

export const selectChannelTotal = createSelector(
  selectChannelSliceState,
  fromChannel.selectChannelTotal
);

export const selectCurrentChannelId = createSelector(
  selectChannelSliceState,
  fromChannel.getSelectedChannelId
);

export const selectCurrentChannel = createSelector(
  selectChannelEntities,
  selectCurrentChannelId,
  (userEntities, userId) => userEntities[userId]
);
