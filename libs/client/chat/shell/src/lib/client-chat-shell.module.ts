import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClientChatDataAccessModule } from '@stock-chat/client/chat/data-access';
import { ClientChatFeatureChannelsModule } from '@stock-chat/client/chat/feature-channels';
import { ClientChatFeatureChatInputModule } from '@stock-chat/client/chat/feature-chat-input';
import { ClientChatFeatureMessagesModule } from '@stock-chat/client/chat/feature-messages';

import { ChatShellComponent } from './chat-shell-component/chat-shell.component.ts';
import { ClientChatShellRoutingModule } from './client-chat-shell-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ClientChatShellRoutingModule,
    ClientChatDataAccessModule,
    ClientChatFeatureChannelsModule,
    ClientChatFeatureMessagesModule,
    ClientChatFeatureChatInputModule,
  ],
  declarations: [ChatShellComponent],
})
export class ClientChatShellModule {}
