import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';

import { UiContentModule } from '@stock-chat/client/shared/layout/ui-content';

@NgModule({
  imports: [CommonModule, UiContentModule, MatToolbarModule],
})
export class FeatureLayoutModule {}
