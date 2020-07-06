import { createReducer, on } from '@ngrx/store';

import { UserDTO } from '@stock-chat/shared/dtos';

import { LayoutActions, SignInAPIActions } from '../actions';

export const authFeatureKey = 'auth';

export interface State {
  loggedUser: UserDTO;
}

export const initialState: State = {
  loggedUser: undefined,
};

export const reducer = createReducer<State>(
  initialState,
  on(SignInAPIActions.signinSuccess, (state, { signinResult }) => ({
    ...state,
    loggedUser: signinResult.user,
  })),

  on(SignInAPIActions.getLoggedUserSuccess, (state, { userData }) => ({
    ...state,
    loggedUser: userData,
  })),

  on(LayoutActions.logout, (state) => ({
    ...state,
    loggedUser: undefined,
  }))
);

export const selectLoggedUser = (state: State) => state.loggedUser;
