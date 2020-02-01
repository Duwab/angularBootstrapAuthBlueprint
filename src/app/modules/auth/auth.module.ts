import { NgModule } from '@angular/core';
import { AuthenticationPageComponent } from './pages/authentication/authentication-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeModule } from '@theme/theme.module';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AuthenticationPageComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    ThemeModule,
    AuthRoutingModule
  ],
  providers: [],
  exports: [
  ]
})
export class AuthModule { }
