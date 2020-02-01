import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { RouterModule } from '@angular/router';
import { CenteredContentLayoutComponent } from './layout/centered-content-layout/centered-content-layout.component';

@NgModule({
  declarations: [
    SplashScreenComponent,
    CenteredContentLayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: 'splash',
      component: SplashScreenComponent
    }])
  ],
  providers: [],
  exports: [
    SplashScreenComponent,
    CenteredContentLayoutComponent
  ]
})
export class ThemeModule { }
