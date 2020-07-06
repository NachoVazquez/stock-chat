import { Component, OnInit, Input } from '@angular/core';

import { MessageDTO } from '@stock-chat/shared/dtos';

@Component({
  selector: 'stock-chat-message-list-ui',
  templateUrl: 'message-list-ui.component.html',
  styleUrls: ['message-list-ui.component.scss'],
})
export class MessageListUIComponent {
  @Input() channelId: string;
  @Input() messages: MessageDTO[];
}
