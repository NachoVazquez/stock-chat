import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ClientStockChatShellModule } from '@stock-chat/client/stock-chat/shell';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, ClientStockChatShellModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
