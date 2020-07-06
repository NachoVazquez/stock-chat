import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ChannelsEffects } from './store/effects';
import * as fromChat from './store/reducers';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,

    StoreModule.forFeature(fromChat.chatFeatureKey, fromChat.reducers),
    EffectsModule.forFeature([ChannelsEffects]),
  ],
})
export class ClientChatDataAccessModule {}
