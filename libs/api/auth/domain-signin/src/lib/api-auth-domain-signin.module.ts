import { Module } from '@nestjs/common';
import { ApiAuthDomainSigninService } from './api-auth-domain-signin.service';

@Module({
  controllers: [],
  providers: [ApiAuthDomainSigninService],
  exports: [ApiAuthDomainSigninService],
})
export class ApiAuthDomainSigninModule {}
