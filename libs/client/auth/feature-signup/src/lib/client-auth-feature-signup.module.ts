import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';

import { SignUpUIComponent } from './components/signup/signup-ui.component';
import { SignUpComponent } from './containers/signup.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: SignUpComponent }]),
  ],
  declarations: [SignUpUIComponent, SignUpComponent],
})
export class FeatureSignupModule {}
