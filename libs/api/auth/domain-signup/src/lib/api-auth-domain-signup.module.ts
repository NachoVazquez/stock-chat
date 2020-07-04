import { Module } from '@nestjs/common';
import { ApiAuthDomainSignupService } from './api-auth-domain-signup.service';

@Module({
  controllers: [],
  providers: [ApiAuthDomainSignupService],
  exports: [ApiAuthDomainSignupService],
})
export class ApiAuthDomainSignupModule {}
