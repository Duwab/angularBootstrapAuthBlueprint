import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { IntroComponent } from './intro/intro.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    IntroComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  providers: [],
  exports: [
  ]
})
export class CoreModule { }
