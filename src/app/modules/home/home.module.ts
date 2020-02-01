import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeModule } from '@theme/theme.module';
import { HomePageComponent } from '@modules/home/pages/home/home-page.component';
import { HomeRoutingModule } from '@modules/home/home-routing.module';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ThemeModule,
    HomeRoutingModule
  ],
  providers: [],
  exports: [
  ]
})
export class HomeModule { }
