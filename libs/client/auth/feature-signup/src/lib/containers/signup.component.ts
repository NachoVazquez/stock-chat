import { Component, OnInit } from '@angular/core';

import { CreateUserDTO } from '@stock-chat/shared/dtos';

@Component({
  selector: 'stock-chat-signup',
  template: `<stock-chat-signup-ui
    (signup)="signup($event)"
  ></stock-chat-signup-ui>`,
})
export class SignUpComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  signup(signinData: CreateUserDTO): void {
    console.log(signinData);
  }
}
