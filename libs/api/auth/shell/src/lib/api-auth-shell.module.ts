import { Module } from '@nestjs/common';

import { ApiAuthDomainModule } from '@stock-chat/api/auth/domain';
import { ApiSharedDomainUserModule } from '@stock-chat/api/shared/user/domain-user';

import { AuthController } from './auth.controller';

@Module({
  imports: [ApiAuthDomainModule, ApiSharedDomainUserModule],
  controllers: [AuthController],
})
export class ApiAuthShellModule {}
