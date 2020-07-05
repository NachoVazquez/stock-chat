import { Component, Output, Self } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { SignUpPresenter } from './signup-ui.presenter';

@Component({
  viewProviders: [SignUpPresenter],
  selector: 'stock-chat-signup-ui',
  templateUrl: 'signup-ui.component.html',
  styleUrls: ['signup-ui.component.scss'],
})
export class SignUpUIComponent {
  @Output() signup = this.presenter.signup$;

  constructor(@Self() private presenter: SignUpPresenter) {}

  get signupForm(): FormGroup {
    return this.presenter.signupForm;
  }

  get nameControl(): FormControl {
    return this.presenter.nameControl;
  }

  get emailControl(): FormControl {
    return this.presenter.emailControl;
  }

  get passwordControl(): FormControl {
    return this.presenter.emailControl;
  }

  get confirmPasswordControl(): FormControl {
    return this.presenter.emailControl;
  }

  doSignup() {
    this.presenter.doSignup();
  }
}
