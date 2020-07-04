import { Channel, Message } from '../interfaces';

export abstract class IChannelsRepository {
  abstract async create(channel: Channel): Promise<Channel>;
  abstract async addMessage(message: Message, id: string): Promise<Channel>;
  abstract async findMessages(id: string, limit: number): Promise<Message[]>;
  abstract async findAll(options?: any): Promise<Channel[]>;
  abstract async findWithLimit(
    id: string,
    limit: number
  ): Promise<Channel | null>;
  abstract async findById(id: string): Promise<Channel | null>;
  abstract async findOne(options?: any, fields?: any): Promise<Channel | null>;
  abstract async update(id: string, newValue: Channel): Promise<Channel | null>;
  abstract async delete(id: string): Promise<Channel | null>;
}
