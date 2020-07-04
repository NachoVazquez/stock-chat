import { Module } from '@nestjs/common';

import { ApiAuthFeatureSignupController } from './api-auth-feature-signup.controller';

@Module({
  controllers: [ApiAuthFeatureSignupController],
  providers: [],
  exports: [],
})
export class ApiAuthFeatureSignupModule {}
