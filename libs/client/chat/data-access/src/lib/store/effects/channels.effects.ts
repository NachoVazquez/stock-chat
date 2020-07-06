import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';

import { ChannelService, ChatService } from '../../services';
import { ChannelAPIActions, ChannelListActions } from '../actions';

@Injectable()
export class ChannelsEffects {
  getChannels$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChannelListActions.getChannels),
      switchMap(() =>
        this.channelService.getAll().pipe(
          map((channels) => ChannelAPIActions.getChannelsSuccess({ channels })),
          catchError(() => of(ChannelAPIActions.getChannelsFailure()))
        )
      )
    )
  );

  addNewChannel$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChannelListActions.addNewChannel),
      mergeMap(({ channelName }) =>
        this.channelService.create({ name: channelName }).pipe(
          map((createdChannel) =>
            ChannelAPIActions.addNewChannelSuccess({ createdChannel })
          ),
          catchError(() => of(ChannelAPIActions.addNewChannelFailure()))
        )
      )
    )
  );

  joinChannel$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ChannelListActions.joinChannel),
        tap(({ channelId }) => {
          this.chatService.joinChannel(channelId);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private channelService: ChannelService,
    private chatService: ChatService
  ) {}
}
