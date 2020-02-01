import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { FakeDelayGuard } from './guards/fakeDelay.guard';


const routes: Routes = [{
  path: 'intro',
  canActivate: [FakeDelayGuard],
  component: IntroComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
