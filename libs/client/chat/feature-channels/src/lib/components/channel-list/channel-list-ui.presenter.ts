import { OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';

import { CreateChannelDialogComponent } from '../create-channel-dialog/create-channel-dialog.component';

export class ChannelListUIPresenter implements OnDestroy {
  private joinChannel = new Subject<string>();
  private addNewChannel = new Subject<string>();

  joinChannel$: Observable<string> = this.joinChannel.asObservable();
  addNewChannel$: Observable<string> = this.addNewChannel.asObservable();

  constructor(public dialog: MatDialog) {}

  doJoin(channelId: string): void {
    this.joinChannel.next(channelId);
  }

  doAddNewChannel(): void {
    const dialogRef = this.dialog.open(CreateChannelDialogComponent, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe((channelName) => {
      console.log('The dialog was closed');
      if (channelName) {
        this.addNewChannel.next(channelName);
      }
    });
  }

  ngOnDestroy(): void {
    this.joinChannel.complete();
  }
}
