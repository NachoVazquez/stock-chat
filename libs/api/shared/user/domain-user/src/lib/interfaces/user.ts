import { Document } from 'mongoose';

import { Trackable } from '@stock-chat/api/shared/domain';

export interface User extends Trackable, Document {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly username?: string;
}
