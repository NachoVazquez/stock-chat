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
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientAuthShellRoutingModule {}
