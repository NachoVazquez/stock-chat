import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { AuthService } from '@stock-chat/client/shared/auth/data-access';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const canActivate = this.authService.isAuthenticated();
    if (canActivate) {
      return true;
    } else {
      this.router.navigate(['/auth/signin']).catch();
      return false;
    }
  }
}
