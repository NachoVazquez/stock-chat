import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { ChatInputUIComponent } from './components/chat-input-ui.component';
import { ChatInputComponent } from './containers/chat-input.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [ChatInputComponent, ChatInputUIComponent],
  exports: [ChatInputComponent],
})
export class ClientChatFeatureChatInputModule {}
