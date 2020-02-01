import { NgModule } from '@angular/core';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { CenteredContentLayoutComponent } from './layout/centered-content-layout/centered-content-layout.component';
import { CommonModule } from '@angular/common';
import { Error404PageComponent } from '@theme/pages/error-404/error-404-page.component';
import { OcticonDirective } from '@theme/directives/octoicon.directive';

@NgModule({
  declarations: [
    CenteredContentLayoutComponent,
    SplashScreenComponent,
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
    CenteredContentLayoutComponent
  ]
})
export class ThemeModule { }