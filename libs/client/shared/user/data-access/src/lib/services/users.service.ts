import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@stock-chat/client/shared/environments';
import { UserDTO } from '@stock-chat/shared/dtos';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private readonly baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getLoggedUserProfile(): Observable<UserDTO> {
    return this.http.get<UserDTO>(`${this.baseUrl}/api/users/loggedUser`);
  }
}
