import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';

import { AuthService } from '../../services/auth.service';
import { SignUpActions, SignUpAPIActions } from '../actions';

@Injectable()
export class SignUpEffects {
  signup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SignUpActions.signup),
      exhaustMap(({ userToCreate }) =>
        this.authService.signup(userToCreate).pipe(
          map(() => SignUpAPIActions.signupSuccess()),
          catchError(() => of(SignUpAPIActions.signupFailure()))
        )
      )
    )
  );

  signupSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SignUpAPIActions.signupSuccess),
        tap(() => {
          this.router.navigate(['/auth/signin']).catch((err) => {
            console.log(err);
          });
        })
      ),

    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
