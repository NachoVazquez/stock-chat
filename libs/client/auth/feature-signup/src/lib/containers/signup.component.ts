import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  reducers as fromAuth,
  SignUpActions,
} from '@stock-chat/client/shared/auth/data-access';
import { CreateUserDTO } from '@stock-chat/shared/dtos';

@Component({
  selector: 'stock-chat-signup',
  template: `<stock-chat-signup-ui
    (signup)="signup($event)"
  ></stock-chat-signup-ui>`,
})
export class SignUpComponent implements OnInit {
  constructor(private readonly store$: Store<fromAuth.State>) {}

  ngOnInit() {}

  signup(signinData: CreateUserDTO): void {
    this.store$.dispatch(SignUpActions.signup({ userToCreate: signinData }));
  }
}
