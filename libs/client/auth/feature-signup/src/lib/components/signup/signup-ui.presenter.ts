import { OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Observable, Subject } from 'rxjs';

import { CreateUserDTO } from '@stock-chat/shared/dtos';

export class SignUpPresenter implements OnDestroy {
  signupForm: FormGroup;
  private signup = new Subject<CreateUserDTO>();

  signup$: Observable<CreateUserDTO> = this.signup.asObservable();

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      { validators: [passwordMatchValidator] }
    );
  }

  get nameControl(): FormControl {
    return this.signupForm.get('name') as FormControl;
  }

  get emailControl(): FormControl {
    return this.signupForm.get('email') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.signupForm.get('password') as FormControl;
  }

  doSignup(): void {
    if (this.signupForm.valid) {
      const singupData: CreateUserDTO = this.signupForm.value;
      this.signup.next(singupData);
    } else {
      return;
    }
  }

  ngOnDestroy(): void {
    this.signup.complete();
  }
}

function passwordMatchValidator(form: FormGroup): ValidationErrors | null {
  const password = form.get('password');
  const confirmPassword = form.get('confirmPassword');

  return password && confirmPassword && password.value === confirmPassword.value
    ? null
    : { mismatch: true };
}
