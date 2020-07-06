import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

import { TopBarComponent } from './components/topbar.component';

@NgModule({
  imports: [CommonModule, RouterModule, MatButtonModule],
  declarations: [TopBarComponent],
  exports: [TopBarComponent],
})
export class UiTopbarModule {}
