import { OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable, Subject } from 'rxjs';

import { CreateMessageDTO } from '@stock-chat/shared/dtos';

export class ChatInputPresenter implements OnDestroy {
  messageForm: FormGroup;
  private sendMessage = new Subject<string>();

  sendMessage$: Observable<string> = this.sendMessage.asObservable();

  constructor(private fb: FormBuilder) {
    this.messageForm = this.fb.group({
      message: ['', [Validators.required]],
    });
  }

  get messageControl(): FormControl {
    return this.messageForm.get('message') as FormControl;
  }

  doSendMessage(): void {
    if (this.messageForm.valid) {
      const message: string = this.messageControl.value;

      this.sendMessage.next(message.trim());
      this.messageControl.setValue('');
    } else {
      return;
    }
  }

  ngOnDestroy(): void {
    this.sendMessage.complete();
  }
}
