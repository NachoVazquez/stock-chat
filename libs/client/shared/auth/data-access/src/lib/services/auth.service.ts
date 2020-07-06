import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import {
  ACCESS_TOKEN,
  REFRESH_TOKEN,
} from '@stock-chat/client/shared/constants';
import { environment } from '@stock-chat/client/shared/environments';
import {
  CreateUserDTO,
  SignInDTO,
  SignInResponseDTO,
} from '@stock-chat/shared/dtos';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  signin(signinData: SignInDTO): Observable<SignInResponseDTO> {
    return this.http
      .post<SignInResponseDTO>(`${this.baseUrl}/api/auth/signin`, signinData)
      .pipe(shareReplay());
  }

  signup(createUser: CreateUserDTO): Observable<void> {
    return this.http
      .post<void>(`${this.baseUrl}/api/auth/signup`, createUser)
      .pipe(shareReplay());
  }

  logout(): void {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(ACCESS_TOKEN);
  }
}
