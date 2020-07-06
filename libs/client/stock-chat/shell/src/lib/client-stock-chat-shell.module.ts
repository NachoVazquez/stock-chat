import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ClientSharedAuthDataAccessModule } from '@stock-chat/client/shared/auth/data-access';
import { FeatureLayoutModule } from '@stock-chat/client/shared/layout/feature-layout';
import { AuthInterceptor } from '@stock-chat/client/shared/utils';

import { ShellChatDataAccessModule } from './shell-chat-data-access.module';
import { ShellChatRoutingModule } from './shell-chat-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ShellChatRoutingModule,
    FeatureLayoutModule,
    ClientSharedAuthDataAccessModule,

    ShellChatDataAccessModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  exports: [FeatureLayoutModule],
})
export class ClientStockChatShellModule {}
