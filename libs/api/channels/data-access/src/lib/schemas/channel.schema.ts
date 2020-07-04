import { Schema } from 'mongoose';

import { Channel } from '@stock-chat/api/channels/domain';
import { UserSchema } from '@stock-chat/api/shared/user/data-access';

import { MessageSchema } from './message.schema';

const channel = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  is_user: { type: Boolean, default: false },
  users: [UserSchema],
  messages: [MessageSchema],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

/**
 * On every save, add the date
 */
channel.pre('save', function (next) {
  const currentDate = new Date();

  (<Channel>this).updated_at = currentDate;
  next();
});

export const ChannelSchema = channel;
