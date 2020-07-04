import { Module } from '@nestjs/common';

import { DomainUserModule } from '@stock-chat/api/shared/user/domain-user';

import { JwtService } from './services';

@Module({
  imports: [DomainUserModule],
  providers: [JwtService],
  exports: [JwtService],
})
export class DomainJwtModule {}
