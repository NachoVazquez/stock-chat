import { createAction, props } from '@ngrx/store';

import { ChannelDTO } from '@stock-chat/shared/dtos';

export const getChannelsSuccess = createAction(
  '[Channel/API] Get Channels Success',
  props<{ channels: ChannelDTO[] }>()
);

export const getChannelsFailure = createAction(
  '[Channel/API] Get Channels Failure'
);

export const addNewChannelSuccess = createAction(
  '[Channel/API] Add New Channel Success',
  props<{ createdChannel: ChannelDTO }>()
);

export const addNewChannelFailure = createAction(
  '[Channel/API] Add New Channel Failure'
);
