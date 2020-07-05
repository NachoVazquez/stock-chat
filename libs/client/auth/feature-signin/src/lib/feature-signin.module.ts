import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';

import { SignInUIComponent } from './components/signin/signin-ui.component';
import { SignInComponent } from './containers/signin.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: SignInComponent }]),
  ],
  declarations: [SignInUIComponent, SignInComponent],
})
export class FeatureSigninModule {}
