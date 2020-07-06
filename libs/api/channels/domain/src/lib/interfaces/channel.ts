import { Document } from 'mongoose';

import { Trackable } from '@stock-chat/api/shared/domain';

import { Message } from './message';

export interface Channel extends Trackable, Document {
  name: string;
  description?: string;
  is_user: boolean;
  messages?: Message[];
}
