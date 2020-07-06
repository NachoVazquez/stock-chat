import { Action, combineReducers, createFeatureSelector } from '@ngrx/store';

import * as fromAuth from './auth.reducer';

export const authFeatureKey = 'auth';

export interface AuthState {
  [fromAuth.authFeatureKey]: fromAuth.State;
}

export interface State {
  [authFeatureKey]: AuthState;
}

export function reducers(state: AuthState | undefined, action: Action) {
  return combineReducers({
    [fromAuth.authFeatureKey]: fromAuth.reducer,
  })(state, action);
}

export const selectAuthState = createFeatureSelector<State, AuthState>(
  authFeatureKey
);
