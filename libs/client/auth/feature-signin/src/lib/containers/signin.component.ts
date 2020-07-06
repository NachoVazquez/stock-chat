import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import {
  reducers as fromAuth,
  SignInActions,
} from '@stock-chat/client/shared/auth/data-access';
import { SignInDTO } from '@stock-chat/shared/dtos';

@Component({
  selector: 'stock-chat-signin',
  template: `<stock-chat-signin-ui
    (signin)="signin($event)"
  ></stock-chat-signin-ui>`,
})
export class SignInComponent implements OnInit {
  constructor(private readonly store$: Store<fromAuth.State>) {}

  ngOnInit() {}

  signin(signinData: SignInDTO): void {
    this.store$.dispatch(SignInActions.signin({ credentials: signinData }));
  }
}
