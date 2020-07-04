// import { Schema } from 'mongoose';

// import {UserSchema} from './index'

// const channel = new Schema({
//   name: { type: String, required: true },
//   description: { type: String },
//   is_user: { type: Boolean, default: false },
//   is_private: { type: Boolean, default: false },
//   users: [UserSchema],
//   messages: [MessageSchema],
//   created_at: { type: Date, default: Date.now },
//   updated_at: { type: Date, default: Date.now },
// });

// /**
//  * On every save, add the date
//  */
// channel.pre('save', function (next) {
//   const currentDate = new Date();

//   this.updated_at = currentDate;
//   next();
// });

// export const RoomSchema = channel;
