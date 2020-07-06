import { createAction, props } from '@ngrx/store';

export const getChannels = createAction('[ChannelList] Get Channels');

export const joinChannel = createAction(
  '[ChannelList] Join Channel',
  props<{ channelId: string }>()
);

export const addNewChannel = createAction(
  '[ChannelList] Add New Channel',
  props<{ channelName: string }>()
);
