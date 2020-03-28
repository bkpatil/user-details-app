import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MicroUserHeaderModule } from 'projects/micro-user-header/src/lib/micro-user-header.module'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MicroUserHeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
