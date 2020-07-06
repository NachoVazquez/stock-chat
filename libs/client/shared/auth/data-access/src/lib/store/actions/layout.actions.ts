import { createAction } from '@ngrx/store';

export const logout = createAction('[Layout] Logout');

export const getLoggedUser = createAction('[Layout] Get User Data');
