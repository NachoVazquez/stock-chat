import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: 'signin',
    loadChildren: () =>
      import('@stock-chat/client/auth/feature-signin').then(
        (module) => module.FeatureSigninModule
      ),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('@stock-chat/client/auth/feature-signup').then(
        (module) => module.FeatureSignupModule
      ),
  },
  { path: '', redirectTo: '/auth/signin', pathMatch: 'full' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ClientAuthShellModule {}
