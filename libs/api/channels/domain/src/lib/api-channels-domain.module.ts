import { Module } from '@nestjs/common';

import { ChannelsService } from './services';

@Module({
  providers: [ChannelsService],
  exports: [ChannelsService],
})
export class ApiChannelsDomainModule {}
