import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DefaultSplashScreen } from './splash-screen/components/default-splash-screen/default-splash-screen.component';
import { CoreRoutingModule } from './core-routing.module';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  declarations: [
    IntroComponent,
    DefaultSplashScreen
  ],
  imports: [
    BrowserModule,
    CoreRoutingModule
  ],
  providers: [],
  exports: [
    DefaultSplashScreen
  ]
})
export class CoreModule { }
