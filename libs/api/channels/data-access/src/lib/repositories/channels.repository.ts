import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {
  Channel,
  IChannelsRepository,
  Message,
} from '@stock-chat/api/channels/domain';

export class ChannelsRepository implements IChannelsRepository {
  constructor(
    @InjectModel('Channel') private readonly channelModel: Model<Channel>
  ) {}

  async create(channel: Channel): Promise<Channel> {
    const createdChannel = new this.channelModel(channel);
    return await createdChannel.save();
  }

  async addMessage(message: Message, id: string): Promise<Channel> {
    const channel = await this.findById(id);
    message.user = message.user._id;
    channel.messages.push(message);

    return await channel.save();
  }

  async findMessages(id: string, limit: number): Promise<Message[]> {
    let channel = await this.findWithLimit(id, limit);

    // Create the user channel, if isn't already exist
    if (!channel) {
      const userRoom = new this.channelModel({
        _id: id,
        name: id,
        is_user: true,
      });
      channel = await this.create(userRoom);
    }

    return channel.messages;
  }

  async findAll(options?: any): Promise<Channel[]> {
    return await this.channelModel.find(options).exec();
  }

  async findWithLimit(id: string, limit: number): Promise<Channel> {
    return await this.channelModel.findById(id).slice('messages', limit).exec();
  }

  async findById(id: string): Promise<Channel> {
    return await this.channelModel.findById(id).exec();
  }

  async findOne(options?: any, fields?: any): Promise<Channel> {
    return await this.channelModel.findOne(options, fields).exec();
  }

  async update(id: string, newValue: Channel): Promise<Channel> {
    return await this.channelModel.findByIdAndUpdate(id, newValue).exec();
  }

  async delete(id: string): Promise<Channel> {
    return await this.channelModel.findByIdAndRemove(id).exec();
  }
}
