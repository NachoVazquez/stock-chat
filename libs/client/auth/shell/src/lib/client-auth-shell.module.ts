import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClientSharedAuthDataAccessModule } from '@stock-chat/client/shared/auth/data-access';

import { ClientAuthShellRoutingModule } from './client-auth-shell-routing.module';

@NgModule({
  imports: [CommonModule, ClientAuthShellRoutingModule],
})
export class ClientAuthShellModule {}
