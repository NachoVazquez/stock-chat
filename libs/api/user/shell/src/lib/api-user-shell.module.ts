import { Module } from '@nestjs/common';

import { ApiSharedDomainUserModule } from '@stock-chat/api/shared/user/domain-user';
import { ApiUserDataAccessModule } from '@stock-chat/api/user/data-access';

import { UsersController } from './users.controller';

@Module({
  imports: [ApiSharedDomainUserModule, ApiUserDataAccessModule],
  controllers: [UsersController],
  providers: [],
  exports: [],
})
export class ApiUserShellModule {}
