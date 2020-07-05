import { Component, Output, Self } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { SignInPresenter } from './signin-ui.presenter';

@Component({
  viewProviders: [SignInPresenter],
  selector: 'stock-chat-signin-ui',
  templateUrl: 'signin-ui.component.html',
  styleUrls: ['signin-ui.component.scss'],
})
export class SignInUIComponent {
  @Output() signin = this.presenter.signin$;

  constructor(@Self() private presenter: SignInPresenter) {}

  get signinForm(): FormGroup {
    return this.presenter.signinForm;
  }

  get emailControl(): FormControl {
    return this.presenter.emailControl;
  }

  get passwordControl(): FormControl {
    return this.presenter.emailControl;
  }

  doSignin() {
    this.presenter.doSignin();
  }
}
