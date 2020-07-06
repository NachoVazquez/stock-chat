import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { MessageUIComponent } from './components/message-item/message-ui.component';
import { MessageListUIComponent } from './components/message-list/message-list-ui.component';
import { MessageListComponent } from './containers/message-list.component';

@NgModule({
  imports: [CommonModule, MatCardModule],
  declarations: [
    MessageListComponent,
    MessageListUIComponent,
    MessageUIComponent,
  ],
  exports: [MessageListComponent],
})
export class ClientChatFeatureMessagesModule {}
