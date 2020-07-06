import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'stock-chat-create-channel-dialog',
  templateUrl: 'create-channel-dialog.component.html',
})
export class CreateChannelDialogComponent {
  channelName: string;
  constructor(public dialogRef: MatDialogRef<CreateChannelDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
