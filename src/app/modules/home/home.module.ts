import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeModule } from '@theme/theme.module';
import { HomePageComponent } from '@modules/home/pages/home/home-page.component';
import { HomeRoutingModule } from '@modules/home/home-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    ThemeModule,
    HomeRoutingModule
  ],
  providers: []
})
export class HomeModule { }
