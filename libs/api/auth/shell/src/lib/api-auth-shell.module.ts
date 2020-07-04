import { Module } from '@nestjs/common';

import { ApiAuthDomainModule } from '@stock-chat/api/auth/domain';

import { AuthController } from './auth.controller';

@Module({
  imports: [ApiAuthDomainModule],
  controllers: [AuthController],
})
export class ApiAuthShellModule {}
