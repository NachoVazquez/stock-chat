import { Component, Input } from '@angular/core';

import { RouteModel } from '@stock-chat/client/shared/utils-router';
import { UserDTO } from '@stock-chat/shared/dtos';

@Component({
  selector: 'stock-chat-topbar',
  templateUrl: 'topbar.component.html',
  styleUrls: ['topbar.component.scss'],
})
export class TopBarComponent {
  @Input() loggedUser: UserDTO;
  @Input() routes: RouteModel[];

  constructor() {}

  isAuthenticated(): boolean {
    return this.loggedUser != undefined;
  }
}
