import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { IUserRepository, User } from '@stock-chat/api/shared/user/domain-user';

export class UserRepository implements IUserRepository {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(user: User): Promise<User> {
    const createdUser = new this.userModel(user);
    return await createdUser.save();
  }

  async findAll(options?: any): Promise<User[]> {
    const users = await this.userModel.find(options).exec();
    const serializedUsers = users.map((user) => {
      return user.schema.methods.serialize(user);
    });

    return serializedUsers;
  }

  async findById(id: string): Promise<User | null> {
    let user = await this.userModel.findById(id).exec();

    if (user) {
      user = user.schema.methods.serialize(user);
    }

    return user;
  }

  async findOne(
    options: any,
    fields?: any,
    isSerialized?: boolean
  ): Promise<User | null> {
    let user = await this.userModel.findOne(options, fields).exec();
    console.log(options);
    if (user && isSerialized) {
      user = user.schema.methods.serialize(user);
    }

    return user;
  }

  async update(id: string, newValue: User): Promise<User | null> {
    return await this.userModel.findByIdAndUpdate(id, newValue).exec();
  }

  async delete(id: string): Promise<User | null> {
    return await this.userModel.findByIdAndRemove(id).exec();
  }
}
