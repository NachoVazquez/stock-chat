import { createAction, props } from '@ngrx/store';

import { SignInResponseDTO, UserDTO } from '@stock-chat/shared/dtos';

export const signinSuccess = createAction(
  '[SingIn/API] Sign In User Success',
  props<{ signinResult: SignInResponseDTO }>()
);

export const signinFailure = createAction('[SingIn/API] Sign In User Failure');

export const refreshToken = createAction(
  '[SingIn/API] Refresh Token',
  props<{ refreshToken: string }>()
);

export const refreshTokenSuccess = createAction(
  '[SingIn/API] Refresh Token Success',
  props<{ signinResult: SignInResponseDTO }>()
);

export const refreshTokenFailure = createAction(
  '[SingIn/API] Refresh Token Failure'
);

export const getLoggedUserSuccess = createAction(
  '[SingIn/API] Get User Data Success',
  props<{ userData: UserDTO }>()
);

export const getLoggedUserFailure = createAction(
  '[SingIn/API] Get User Data Failure'
);
