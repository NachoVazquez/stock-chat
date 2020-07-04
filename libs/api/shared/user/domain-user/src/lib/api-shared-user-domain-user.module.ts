import { Module } from '@nestjs/common';

import { UsersService } from './services';

@Module({
  controllers: [],
  providers: [UsersService],
  exports: [UsersService],
})
export class ApiSharedDomainUserModule {}
