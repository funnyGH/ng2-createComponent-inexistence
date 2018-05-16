import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Child11Component } from './dynamic-comp/child11/child11.component';
import { DynamicCompComponent } from './dynamic-comp/dynamic-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    Child11Component,
    DynamicCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [Child11Component]
})
export class AppModule { }
