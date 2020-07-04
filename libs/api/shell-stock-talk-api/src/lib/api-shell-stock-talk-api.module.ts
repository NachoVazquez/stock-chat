import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ApiAuthShellModule } from '@stock-chat/api/auth/shell';
import { environment } from '@stock-chat/api/shared/environments';
import { ApiUserShellModule } from '@stock-chat/api/user/shell';

@Module({
  imports: [
    MongooseModule.forRoot(environment.databaseURL),
    ApiAuthShellModule,
    ApiUserShellModule,
  ],
})
export class ApiShellStockTalkApiModule {}
