import { Component, Input, Output, Self } from '@angular/core';

import { RouteModel } from '@stock-chat/client/shared/utils-router';
import { UserDTO } from '@stock-chat/shared/dtos';

import { TopBarPresenter } from './topbar.presenter';

@Component({
  viewProviders: [TopBarPresenter],
  selector: 'stock-chat-topbar',
  templateUrl: 'topbar.component.html',
  styleUrls: ['topbar.component.scss'],
})
export class TopBarComponent {
  @Input() loggedUser: UserDTO;
  @Input() routes: RouteModel[];

  @Output() logout = this.presenter.logout$;

  constructor(@Self() private presenter: TopBarPresenter) {}

  get isAuthenticated() {
    return this.presenter.isAuthenticated(this.loggedUser);
  }

  doLogout(): void {
    this.presenter.doLogout();
  }
}
