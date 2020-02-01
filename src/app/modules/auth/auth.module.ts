import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthenticationPage } from './pages/authentication/authentication.page';
import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  declarations: [
    AuthenticationPage
  ],
  imports: [
    BrowserModule,
    AuthRoutingModule
  ],
  providers: [],
  exports: [
  ]
})
export class AuthModule { }
