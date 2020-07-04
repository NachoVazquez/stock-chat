import { Module } from '@nestjs/common';

import { ApiChatEngineShellController } from './api-chat-engine-shell.controller';

@Module({
  controllers: [ApiChatEngineShellController],
  providers: [],
  exports: [],
})
export class ApiChatEngineShellModule {}
