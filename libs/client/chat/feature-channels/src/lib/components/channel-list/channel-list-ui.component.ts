import { Component, Input, OnInit, Output, Self } from '@angular/core';

import { ChannelDTO } from '@stock-chat/shared/dtos';

import { ChannelListUIPresenter } from './channel-list-ui.presenter';

@Component({
  viewProviders: [ChannelListUIPresenter],
  selector: 'stock-chat-channel-list-ui',
  templateUrl: 'channel-list-ui.component.html',
  styleUrls: ['channel-list-ui.component.scss'],
})
export class ChannelListUIComponent implements OnInit {
  @Input() channels: ChannelDTO[];
  @Input() currentChannel: ChannelDTO;

  @Output() joinChannel = this.presenter.joinChannel$;
  @Output() addNewChannel = this.presenter.addNewChannel$;

  constructor(@Self() private presenter: ChannelListUIPresenter) {}

  doJoinChannel(channelId: string): void {
    this.presenter.doJoin(channelId);
  }

  doAddNewChannel(): void {
    this.presenter.doAddNewChannel();
  }

  ngOnInit() {}
}
