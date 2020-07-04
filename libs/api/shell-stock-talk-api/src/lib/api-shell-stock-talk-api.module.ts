import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ApiAuthShellModule } from '@stock-chat/api/auth/shell';
import { GetUserMiddleware } from '@stock-chat/api/shared/auth/utils';
import { environment } from '@stock-chat/api/shared/environments';
import {
  ApiUserShellModule,
  UsersController,
} from '@stock-chat/api/user/shell';

@Module({
  imports: [
    MongooseModule.forRoot(environment.databaseURL),
    ApiAuthShellModule,
    ApiUserShellModule,
  ],
})
export class ApiShellStockTalkApiModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(GetUserMiddleware).forRoutes(UsersController);
  }
}
