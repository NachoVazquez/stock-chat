import { Component, Output, Self } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ChatInputPresenter } from './chat-input-ui.presenter';

@Component({
  viewProviders: [ChatInputPresenter],
  selector: 'stock-chat-chat-input-ui',
  templateUrl: 'chat-input-ui.component.html',
  styleUrls: ['chat-input-ui.component.scss'],
})
export class ChatInputUIComponent {
  @Output() sendMessage = this.presenter.sendMessage$;

  constructor(@Self() private presenter: ChatInputPresenter) {}

  get messageForm(): FormGroup {
    return this.presenter.messageForm;
  }

  get messageControl(): FormControl {
    return this.presenter.messageControl;
  }

  doSendMessage(): void {
    this.presenter.doSendMessage();
  }
}
