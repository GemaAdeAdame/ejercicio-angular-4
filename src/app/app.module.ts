import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Personaje1Component } from './personaje1/personaje1.component';
import { Personaje2Component } from './personaje2/personaje2.component';
import { Personaje3Component } from './personaje3/personaje3.component';
import { SelectorComponent } from './selector/selector.component';

@NgModule({
  declarations: [
    AppComponent,
    Personaje1Component,
    Personaje2Component,
    Personaje3Component,
    SelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
