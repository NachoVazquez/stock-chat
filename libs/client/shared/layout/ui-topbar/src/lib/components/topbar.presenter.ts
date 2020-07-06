import { OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { UserDTO } from '@stock-chat/shared/dtos';

export class TopBarPresenter implements OnDestroy {
  private logout = new Subject<void>();

  logout$: Observable<void> = this.logout.asObservable();

  isAuthenticated(loggedUser: UserDTO | undefined): boolean {
    return loggedUser !== undefined;
  }

  doLogout(): void {
    this.logout.next();
  }

  ngOnDestroy(): void {
    this.logout.complete();
  }
}
