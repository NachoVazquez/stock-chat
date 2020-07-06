import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '@stock-chat/client/shared/environments';

// ngrx dev tools is expensive, use only as a debug tool
const storeDevToolsConfig = environment.production
  ? []
  : [
      StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: false,
        features: {
          pause: false,
          lock: true,
          persist: true,
        },
      }),
    ];

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    storeDevToolsConfig,
  ],
})
export class ShellChatDataAccessModule {}
