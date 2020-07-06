import { MessageDTO } from '../message';

import { CreateChannelDTO } from './create-channel.dto';

export interface ChannelDTO extends CreateChannelDTO {
  description?: string;
  is_user: boolean;
  messages?: MessageDTO[];
  created_at: Date;
  _id: string;
}
