import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { UiContentModule } from '@stock-chat/client/shared/layout/ui-content';
import { UiTopbarModule } from '@stock-chat/client/shared/layout/ui-topbar';

import { LayoutComponent } from './components/layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, UiContentModule, MatToolbarModule, UiTopbarModule],
  exports: [LayoutComponent],
})
export class FeatureLayoutModule {}
