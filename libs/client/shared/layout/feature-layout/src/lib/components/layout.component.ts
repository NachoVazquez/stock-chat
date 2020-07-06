import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  AuthSelectors,
  LayoutActions,
  reducers as fromAuth,
} from '@stock-chat/client/shared/auth/data-access';
import { UserDTO } from '@stock-chat/shared/dtos';

@Component({
  selector: 'stock-chat-layout',
  templateUrl: 'layout.component.html',
  styleUrls: ['layout.component.scss'],
})
export class LayoutComponent {
  user$: Observable<UserDTO | undefined>;

  constructor(private readonly store$: Store<fromAuth.State>) {
    this.user$ = this.store$.select(AuthSelectors.selectLoggedUser);
    this.store$.dispatch(LayoutActions.getLoggedUser());
  }

  logout(): void {
    this.store$.dispatch(LayoutActions.logout());
  }
}
