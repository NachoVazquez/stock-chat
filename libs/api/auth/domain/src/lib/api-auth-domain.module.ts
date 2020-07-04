import { Module } from '@nestjs/common';

import { DomainJwtModule } from '@stock-chat/api/shared/auth/domain-jwt';
import { ApiSharedDomainUserModule } from '@stock-chat/api/shared/user/domain-user';

import { AuthService } from './services';

@Module({
  imports: [DomainJwtModule, ApiSharedDomainUserModule],
  providers: [AuthService],
  exports: [AuthService],
})
export class ApiAuthDomainModule {}
