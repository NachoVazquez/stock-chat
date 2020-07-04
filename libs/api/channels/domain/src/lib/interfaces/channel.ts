import { Document } from 'mongoose';

import { Trackable } from '@stock-chat/api/shared/domain';
import { User } from '@stock-chat/api/shared/user/domain-user';

import { Message } from './message';

export interface Channel extends Trackable, Document {
  name: String;
  description?: String;
  is_user: Boolean;
  users?: User[];
  messages?: Message[];
}
