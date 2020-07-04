import { Module } from '@nestjs/common';

import { ApiShellStockTalkApiModule } from '@stock-chat/api/shell-stock-talk-api';

@Module({
  imports: [ApiShellStockTalkApiModule],
})
export class AppModule {}
