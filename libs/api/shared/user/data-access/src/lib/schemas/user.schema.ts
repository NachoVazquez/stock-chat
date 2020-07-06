import { Schema } from 'mongoose';

import { User } from '@stock-chat/api/shared/user/domain-user';

const user = new Schema({
  name: { type: String, required: true, unique: true },
  username: { type: String },
  email: { type: String, required: true, unique: true },
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
    name: userModel.name,
    email: userModel.email,
  };
};

export const UserSchema = user;
