import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@stock-chat/client/shared/environments';
import { ChannelDTO, CreateChannelDTO } from '@stock-chat/shared/dtos';

@Injectable({ providedIn: 'root' })
export class ChannelService {
  private readonly baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<ChannelDTO[]> {
    return this.http.get<ChannelDTO[]>(`${this.baseUrl}/api/channels`);
  }

  create(channelToCreate: CreateChannelDTO): Observable<ChannelDTO> {
    return this.http.post<ChannelDTO>(
      `${this.baseUrl}/api/channels`,
      channelToCreate
    );
  }
}
