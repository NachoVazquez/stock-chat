import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SignInEffects, SignUpEffects } from './store/effects';
import * as fromAuth from './store/reducers';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducers),
    EffectsModule.forFeature([SignUpEffects, SignInEffects]),
  ],
})
export class ClientSharedAuthDataAccessModule {}
