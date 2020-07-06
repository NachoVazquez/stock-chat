import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { ChannelListUIComponent } from './components/channel-list/channel-list-ui.component';
import { CreateChannelDialogComponent } from './components/create-channel-dialog/create-channel-dialog.component';
import { ChannelListComponent } from './containers/channel-list.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
  ],
  declarations: [
    ChannelListComponent,
    ChannelListUIComponent,
    CreateChannelDialogComponent,
  ],
  entryComponents: [CreateChannelDialogComponent],
  exports: [ChannelListComponent],
})
export class ClientChatFeatureChannelsModule {}
