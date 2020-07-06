import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  ChannelListActions,
  ChannelSelectors,
  reducers as fromChannel,
} from '@stock-chat/client/chat/data-access';
import { ChannelDTO } from '@stock-chat/shared/dtos';

@Component({
  selector: 'stock-chat-channel-list',
  template: `<stock-chat-channel-list-ui
    [channels]="channels$ | async"
    [currentChannel]="selectedChannel$ | async"
    (addNewChannel)="addNewChannel($event)"
    (joinChannel)="joinChannel($event)"
  ></stock-chat-channel-list-ui>`,
})
export class ChannelListComponent implements OnInit {
  channels$: Observable<ChannelDTO[]>;
  selectedChannel$: Observable<ChannelDTO>;

  constructor(private readonly store$: Store<fromChannel.State>) {
    this.channels$ = this.store$.select(ChannelSelectors.selectAllChannels);
    this.selectedChannel$ = this.store$.select(
      ChannelSelectors.selectCurrentChannel
    );

    this.store$.dispatch(ChannelListActions.getChannels());
  }

  joinChannel(channelId: string): void {
    this.store$.dispatch(ChannelListActions.joinChannel({ channelId }));
  }
  addNewChannel(channelName: string): void {
    this.store$.dispatch(ChannelListActions.addNewChannel({ channelName }));
  }

  ngOnInit() {}
}
