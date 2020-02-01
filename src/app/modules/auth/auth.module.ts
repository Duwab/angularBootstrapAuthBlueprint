import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthenticationPageComponent } from './pages/authentication/authentication-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AuthenticationPageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AuthRoutingModule
  ],
  providers: [],
  exports: [
  ]
})
export class AuthModule { }
