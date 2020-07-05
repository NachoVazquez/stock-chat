import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { FeatureLayoutModule } from '@stock-chat/client/shared/layout/feature-layout';
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
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(rootRoutes, {
      preloadingStrategy: SelectivePreloadingStrategyService,
    }),
    FeatureLayoutModule,
  ],
  exports: [FeatureLayoutModule],
})
export class ClientStockChatShellModule {}
