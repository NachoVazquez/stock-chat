import { Module } from '@nestjs/common';
import { ApiSharedUserDomainUserService } from './api-shared-user-domain-user.service';

@Module({
  controllers: [],
  providers: [ApiSharedUserDomainUserService],
  exports: [ApiSharedUserDomainUserService],
})
export class ApiSharedUserDomainUserModule {}
