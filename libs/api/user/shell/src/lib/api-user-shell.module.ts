import { Module } from '@nestjs/common';

import { ApiSharedUserDataAccessModule } from '@stock-chat/api/shared/user/data-access';
import { ApiSharedDomainUserModule } from '@stock-chat/api/shared/user/domain-user';

import { UsersController } from './users.controller';

@Module({
  imports: [ApiSharedDomainUserModule, ApiSharedUserDataAccessModule],
  controllers: [UsersController],
})
export class ApiUserShellModule {}
