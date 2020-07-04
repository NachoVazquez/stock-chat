import { User } from '../interfaces/user';

export abstract class IUserRepository {
  abstract async create(user: User): Promise<User>;
  abstract async findAll(options?: any): Promise<User[]>;
  abstract async findById(id: string): Promise<User | null>;
  abstract async findOne(
    options: any,
    fields?: any,
    isSerialized?: boolean
  ): Promise<User | null>;
  abstract async update(id: string, newValue: User): Promise<User | null>;
  abstract async delete(id: string): Promise<User | null>;
}
