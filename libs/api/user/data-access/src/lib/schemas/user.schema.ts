import { Schema } from 'mongoose';

import { User } from '@stock-chat/api/shared/user/domain-user';

const user = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

/**
 * On every save, add the date
 */
user.pre('save', function (next) {
  const currentDate = new Date();

  (<User>this).updated_at = currentDate;
  next();
});

/**
 * Serialize user to send it throw the JWT token
 */
user.methods.serialize = function (userModel: User) {
  return {
    _id: userModel._id,
    username: userModel.username,
    email: userModel.email,
  };
};

export const UserSchema = user;
