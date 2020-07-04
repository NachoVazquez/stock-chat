import { Module } from '@nestjs/common';

import { ApiSharedDomainUserModule } from '@stock-chat/api/shared/user/domain-user';

import { JwtService } from './services';

@Module({
  imports: [ApiSharedDomainUserModule],
  providers: [JwtService],
  exports: [JwtService],
})
export class DomainJwtModule {}
