import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { ChannelDTO } from '@stock-chat/shared/dtos';

import { ChannelAPIActions, ChannelListActions } from '../actions';

export const channelFeatureKey = 'channel';

export interface State extends EntityState<ChannelDTO> {
  selectedChannelId: string | undefined;
}

export const adapter = createEntityAdapter<ChannelDTO>({
  selectId: (channel) => channel._id,
});

export const initialState: State = adapter.getInitialState({
  selectedChannelId: undefined,
});

export const reducer = createReducer<State>(
  initialState,
  on(ChannelAPIActions.getChannelsSuccess, (state, { channels }) =>
    adapter.setAll(channels, { ...state, selectedChannelId: undefined })
  ),

  on(ChannelListActions.joinChannel, (state, { channelId }) => ({
    ...state,
    selectedChannelId: channelId,
  })),

  on(ChannelAPIActions.addNewChannelSuccess, (state, { createdChannel }) =>
    adapter.addOne(createdChannel, state)
  )
);

export const getSelectedChannelId = (state: State) => state.selectedChannelId;

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

// select the array of user ids
export const selectChannelIds = selectIds;

// select the dictionary of user entities
export const selectChannelEntities = selectEntities;

// select the array of users
export const selectAllChannels = selectAll;

// select the total user count
export const selectChannelTotal = selectTotal;
