import { SplashScreenComponent } from '@theme/components/splash-screen/splash-screen.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const ThemeRoutes = [{
  path: 'splash',
  component: SplashScreenComponent
}];

@NgModule({
  imports: [RouterModule.forChild(ThemeRoutes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule { }
