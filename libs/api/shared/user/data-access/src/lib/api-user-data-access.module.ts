import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { IUserRepository } from '@stock-chat/api/shared/user/domain-user';

import { UserRepository } from './repositories/user-repository';
import { UserSchema } from './schemas/user.schema';

@Global()
@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [],
  providers: [{ provide: IUserRepository, useClass: UserRepository }],
  exports: [IUserRepository],
})
export class ApiSharedUserDataAccessModule {}
