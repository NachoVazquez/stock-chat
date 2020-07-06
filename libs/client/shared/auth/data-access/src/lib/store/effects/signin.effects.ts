import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';

import {
  ACCESS_TOKEN,
  REFRESH_TOKEN,
} from '@stock-chat/client/shared/constants';
import { UsersService } from '@stock-chat/client/shared/user/data-access';

import { AuthService } from '../../services/auth.service';
import {
  LayoutActions,
  SignInActions,
  SignInAPIActions,
  SignUpActions,
} from '../actions';

@Injectable()
export class SignInEffects {
  signin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SignInActions.signin),
      exhaustMap(({ credentials }) =>
        this.authService.signin(credentials).pipe(
          map((signinResult) =>
            SignInAPIActions.signinSuccess({ signinResult })
          ),
          catchError(() => of(SignInAPIActions.signinFailure()))
        )
      )
    )
  );

  signinSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SignInAPIActions.signinSuccess),
        tap(({ signinResult }) => {
          localStorage.setItem(ACCESS_TOKEN, signinResult.tokens.accessToken);
          localStorage.setItem(REFRESH_TOKEN, signinResult.tokens.refreshToken);

          this.router.navigate(['']).catch();
        })
      ),

    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          LayoutActions.logout,
          SignInActions.logout,
          SignUpActions.logout
        ),
        tap(() => {
          this.authService.logout();
          this.router.navigate(['/auth/signin']).catch();
        })
      ),

    { dispatch: false }
  );

  getLoggedUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LayoutActions.getLoggedUser),
      exhaustMap(() =>
        this.userService.getLoggedUserProfile().pipe(
          map((userData) =>
            SignInAPIActions.getLoggedUserSuccess({ userData })
          ),
          catchError((error: HttpErrorResponse) => {
            if (error.status === 401) {
              this.router.navigate(['/auth/signin']).catch();
            }
            return of(SignInAPIActions.getLoggedUserFailure());
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private userService: UsersService,
    private router: Router
  ) {}
}
