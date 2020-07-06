import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ChatShellComponent } from './chat-shell-component/chat-shell.component.ts';

export const clientChatShellRoutes: Route[] = [
  {
    path: '',
    component: ChatShellComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(clientChatShellRoutes)],
  exports: [RouterModule],
})
export class ClientChatShellRoutingModule {}
