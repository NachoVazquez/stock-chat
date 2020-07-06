import { createSelector } from '@ngrx/store';

import * as fromAuth from '../reducers/auth.reducer';
import { selectAuthState } from '../reducers/index';

export const selectAuthSliceState = createSelector(
  selectAuthState,
  (state) => state.auth
);

export const selectLoggedUser = createSelector(
  selectAuthSliceState,
  fromAuth.selectLoggedUser
);
