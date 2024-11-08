import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DaughterComponent } from './daughter/daughter.component';
import { GranddaughterComponent } from './granddaughter/granddaughter.component';

@NgModule({
  declarations: [AppComponent, DaughterComponent, GranddaughterComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
