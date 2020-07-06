import { Injectable } from '@nestjs/common';

import { CreateMessageDTO, MessageDTO } from '@stock-chat/shared/dtos';
import { ChannelDTO, CreateChannelDTO } from '@stock-chat/shared/dtos';

import { IChannelsRepository } from '../abstracts';
import { Channel, Message } from '../interfaces';

@Injectable()
export class ChannelsService {
  constructor(private channelsRepository: IChannelsRepository) {}

  async create(channel: CreateChannelDTO): Promise<ChannelDTO> {
    return await this.channelsRepository.create(channel as Channel);
  }

  async addMessage(message: CreateMessageDTO, id: string): Promise<ChannelDTO> {
    return (await this.channelsRepository.addMessage(
      message as Message,
      id
    )) as ChannelDTO;
  }

  async findMessages(id: string, limit: number): Promise<Message[]> {
    return await this.channelsRepository.findMessages(id, limit);
  }

  async findAll(options?: any): Promise<Channel[]> {
    return await this.channelsRepository.findAll(options);
  }

  async findWithLimit(id: string, limit: number): Promise<Channel> {
    return await this.channelsRepository.findWithLimit(id, limit);
  }

  async findById(id: string): Promise<Channel> {
    return await this.channelsRepository.findById(id);
  }

  async findOne(options?: any, fields?: any): Promise<Channel> {
    return await this.channelsRepository.findOne(options, fields);
  }

  async update(id: string, newValue: Channel): Promise<Channel> {
    return await this.channelsRepository.update(id, newValue);
  }

  async delete(id: string): Promise<Channel> {
    return await this.channelsRepository.delete(id);
  }
}
