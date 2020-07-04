import { Module } from '@nestjs/common';

import { ApiAuthFeatureSigninController } from './api-auth-feature-signin.controller';

@Module({
  controllers: [ApiAuthFeatureSigninController],
  providers: [],
  exports: [],
})
export class ApiAuthFeatureSigninModule {}
