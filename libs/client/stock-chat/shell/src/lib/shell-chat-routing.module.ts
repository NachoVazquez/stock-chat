import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AuthGuard } from '@stock-chat/client/shared/utils';
import { SelectivePreloadingStrategyService } from '@stock-chat/client/shared/utils-router';

export const rootRoutes: Route[] = [
  {
    path: 'auth',
    loadChildren: () =>
      import('@stock-chat/client/auth/shell').then(
        (m) => m.ClientAuthShellModule
      ),
    data: { preload: true },
  },
  {
    path: 'chat',
    loadChildren: () =>
      import('@stock-chat/client/chat/shell').then(
        (m) => m.ClientChatShellModule
      ),
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: '/chat', pathMatch: 'full' },
  { path: '**', redirectTo: '/chat', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(rootRoutes, {
      preloadingStrategy: SelectivePreloadingStrategyService,
    }),
  ],
  exports: [RouterModule],
})
export class ShellChatRoutingModule {}
