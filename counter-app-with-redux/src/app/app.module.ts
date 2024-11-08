import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { counterReducer } from './Counter/counter.reducer';
import { DaughterComponent } from './Counter/daughter/daughter.component';
import { GranddaughterComponent } from './Counter/granddaughter/granddaughter.component';

@NgModule({
  declarations: [AppComponent, DaughterComponent, GranddaughterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ counter: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
