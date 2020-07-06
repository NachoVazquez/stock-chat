import { Component, Input } from '@angular/core';

import { MessageDTO } from '@stock-chat/shared/dtos';

@Component({
  selector: 'stock-chat-message-ui',
  templateUrl: 'message-ui.component.html',
  styleUrls: ['message-ui.component.scss'],
})
export class MessageUIComponent {
  @Input() message: MessageDTO;
}
