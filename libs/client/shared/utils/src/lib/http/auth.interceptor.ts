import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ACCESS_TOKEN } from '@stock-chat/client/shared/constants';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);

    if (accessToken) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', accessToken),
      });

      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
