import { createAction, props } from '@ngrx/store';

import { CreateUserDTO } from '@stock-chat/shared/dtos';

export const signup = createAction(
  '[SingUp] Sign Up User',
  props<{ userToCreate: CreateUserDTO }>()
);

export const logout = createAction('[SingUp] Logout');
