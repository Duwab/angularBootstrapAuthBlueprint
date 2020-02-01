import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultSplashScreen } from './splash-screen/components/default-splash-screen/default-splash-screen.component';
import { IntroComponent } from './intro/intro.component';
import { FakeDelayGuard } from './guards/fakeDelay.guard';


const routes: Routes = [{
  path: 'intro',
  canActivate: [FakeDelayGuard],
  component: IntroComponent
}, {
  path: 'splash',
  component: DefaultSplashScreen
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
