import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChatShellComponent } from './chat-shell-component/chat-shell.component.ts';
import { ClientChatShellRoutingModule } from './client-chat-shell-routing.module';

@NgModule({
  imports: [CommonModule, ClientChatShellRoutingModule],
  declarations: [ChatShellComponent],
})
export class ClientChatShellModule {}
