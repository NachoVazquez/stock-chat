import { createAction, props } from '@ngrx/store';

import { SignInDTO } from '@stock-chat/shared/dtos';

export const signin = createAction(
  '[SingIn] Try to Sign In User',
  props<{ credentials: SignInDTO }>()
);
