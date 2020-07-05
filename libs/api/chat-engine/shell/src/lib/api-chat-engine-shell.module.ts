import { Module } from '@nestjs/common';

import { ApiChannelsDomainModule } from '@stock-chat/api/channels/domain';
import { DomainJwtModule } from '@stock-chat/api/shared/auth/domain-jwt';

import { ChatEngineGateway } from './chat-engine.gateway';

@Module({
  imports: [DomainJwtModule, ApiChannelsDomainModule],
  providers: [ChatEngineGateway],
})
export class ApiChatEngineShellModule {}
