import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContentComponent } from './components/content.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ContentComponent],
  exports: [ContentComponent],
})
export class UiContentModule {}
