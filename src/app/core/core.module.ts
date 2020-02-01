import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  declarations: [
    IntroComponent
  ],
  imports: [
    BrowserModule,
    CoreRoutingModule
  ],
  providers: [],
  exports: [
  ]
})
export class CoreModule { }
