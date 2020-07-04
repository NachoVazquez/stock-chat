import { Module } from '@nestjs/common';

import { ApiChannelsDataAccessModule } from '@stock-chat/api/channels/data-access';
import { ApiChannelsDomainModule } from '@stock-chat/api/channels/domain';

import { ChannelsController } from './channels.controller';

@Module({
  imports: [ApiChannelsDataAccessModule, ApiChannelsDomainModule],
  controllers: [ChannelsController],
})
export class ApiChannelsShellModule {}
