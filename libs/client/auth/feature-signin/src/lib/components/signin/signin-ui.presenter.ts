import { OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable, Subject } from 'rxjs';

import { SignInDTO } from '@stock-chat/shared/dtos';

export class SignInPresenter implements OnDestroy {
  signinForm: FormGroup;
  private signin = new Subject<SignInDTO>();

  signin$: Observable<SignInDTO> = this.signin.asObservable();

  constructor(private fb: FormBuilder) {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get emailControl(): FormControl {
    return this.signinForm.get('email') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.signinForm.get('password') as FormControl;
  }

  doSignin(): void {
    if (this.signinForm.valid) {
      const singinData: SignInDTO = this.signinForm.value;
      this.signin.next(singinData);
    } else {
      return;
    }
  }

  ngOnDestroy(): void {
    this.signin.complete();
  }
}
