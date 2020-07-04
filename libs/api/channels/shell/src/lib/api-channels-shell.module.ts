import { Module } from '@nestjs/common';

import { ApiChannelsShellController } from './api-channels-shell.controller';

@Module({
  controllers: [ApiChannelsShellController],
  providers: [],
  exports: [],
})
export class ApiChannelsShellModule {}
