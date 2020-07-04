import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { IUserRepository, User } from '@stock-chat/api/shared/user/domain-user';

export class UserRepository implements IUserRepository {
  constructor(@InjectModel('User') private readonly UserModel: Model<User>) {}

  async create(user: User): Promise<User> {
    const createdUser = new this.UserModel(user);
    return await createdUser.save();
  }

  async findAll(options?: any): Promise<User[]> {
    const users = await this.UserModel.find(options).exec();
    const serializedUsers = users.map((user) => {
      return user.schema.methods.serialize(user);
    });

    return serializedUsers;
  }

  async findById(id: string): Promise<User | null> {
    let user = await this.UserModel.findById(id).exec();

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
    let user = await this.UserModel.findOne(options, fields).exec();
    console.log(options);
    if (user && isSerialized) {
      user = user.schema.methods.serialize(user);
    }

    return user;
  }

  async update(id: string, newValue: User): Promise<User | null> {
    return await this.UserModel.findByIdAndUpdate(id, newValue).exec();
  }

  async delete(id: string): Promise<User | null> {
    return await this.UserModel.findByIdAndRemove(id).exec();
  }
}
