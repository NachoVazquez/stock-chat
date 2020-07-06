import { Injectable } from '@nestjs/common';

import { CreateUserDTO } from '@stock-chat/shared/dtos';

import { IUserRepository } from '../abstracts';
import { User } from '../interfaces';

@Injectable()
export class UsersService {
  constructor(private userRepository: IUserRepository) {}

  async create(user: CreateUserDTO): Promise<User> {
    return await this.userRepository.create(user);
  }

  async findAll(options?: any): Promise<User[]> {
    return await this.userRepository.findAll(options);
  }

  async findById(id: string): Promise<User | null> {
    return await this.userRepository.findById(id);
  }

  async findOne(
    options: any,
    fields?: any,
    isSerialized?: boolean
  ): Promise<User | null> {
    return await this.userRepository.findOne(options, fields, isSerialized);
  }

  async update(id: string, newValue: User): Promise<User | null> {
    return await this.userRepository.update(id, newValue);
  }

  async delete(id: string): Promise<User | null> {
    return await this.userRepository.delete(id);
  }
}
