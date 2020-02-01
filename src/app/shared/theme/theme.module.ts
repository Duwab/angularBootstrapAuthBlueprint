import { NgModule } from '@angular/core';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { CenteredContentLayoutComponent } from './layout/centered-content-layout/centered-content-layout.component';
import { CommonModule } from '@angular/common';
import { Error404PageComponent } from '@theme/pages/error-404/error-404-page.component';
import { OcticonDirective } from '@theme/directives/octoicon.directive';
import { ErrorFrontEndPageComponent } from '@theme/pages/error-frontend/error-front-end-page.component';

@NgModule({
  declarations: [
    CenteredContentLayoutComponent,
    SplashScreenComponent,
    ErrorFrontEndPageComponent,
    Error404PageComponent,
    OcticonDirective
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    OcticonDirective,
    SplashScreenComponent,
    ErrorFrontEndPageComponent,
    CenteredContentLayoutComponent
  ]
})
export class ThemeModule { }
