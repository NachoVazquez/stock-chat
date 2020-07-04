import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { IChannelsRepository } from '@stock-chat/api/channels/domain';

import { ChannelsRepository } from './repositories';
import { ChannelSchema } from './schemas';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Channel', schema: ChannelSchema }]),
  ],
  controllers: [],
  providers: [{ provide: IChannelsRepository, useClass: ChannelsRepository }],
  exports: [IChannelsRepository],
})
export class ApiChannelsDataAccessModule {}
