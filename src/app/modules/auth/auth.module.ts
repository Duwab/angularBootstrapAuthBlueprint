import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthenticationPageComponent } from './pages/authentication/authentication-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeModule } from '../../shared/theme/theme.module';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AuthenticationPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ThemeModule,
    AuthRoutingModule
  ],
  providers: [],
  exports: [
  ]
})
export class AuthModule { }
