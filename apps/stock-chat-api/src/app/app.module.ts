import { Module } from '@nestjs/common';

import { ApiShellStockChatApiModule } from '@stock-chat/api/shell-stock-chat-api';

@Module({
  imports: [ApiShellStockChatApiModule],
})
export class AppModule {}
