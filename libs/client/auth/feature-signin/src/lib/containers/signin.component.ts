import { Component, OnInit } from '@angular/core';

import { SignInDTO } from '@stock-chat/shared/dtos';

@Component({
  selector: 'stock-chat-signin',
  template: `<stock-chat-signin-ui
    (signin)="signin($event)"
  ></stock-chat-signin-ui>`,
})
export class SignInComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  signin(signinData: SignInDTO): void {
    console.log(signinData);
  }
}
