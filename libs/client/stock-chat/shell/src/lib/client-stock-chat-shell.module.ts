import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

import { ClientSharedAuthDataAccessModule } from '@stock-chat/client/shared/auth/data-access';
import { ACCESS_TOKEN } from '@stock-chat/client/shared/constants';
import { environment } from '@stock-chat/client/shared/environments';
import { FeatureLayoutModule } from '@stock-chat/client/shared/layout/feature-layout';
import { AuthInterceptor } from '@stock-chat/client/shared/utils';

import { ShellChatDataAccessModule } from './shell-chat-data-access.module';
import { ShellChatRoutingModule } from './shell-chat-routing.module';

const config: SocketIoConfig = {
  url: `${environment.baseUrl}/channels?token=${localStorage.getItem(
    ACCESS_TOKEN
  )}`,
  options: {},
};

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ShellChatRoutingModule,
    FeatureLayoutModule,
    ClientSharedAuthDataAccessModule,
    ShellChatDataAccessModule,

    SocketIoModule.forRoot(config),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  exports: [FeatureLayoutModule],
})
export class ClientStockChatShellModule {}
