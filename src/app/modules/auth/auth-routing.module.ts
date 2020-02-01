import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationPageComponent } from './pages/authentication/authentication-page.component';
import { FakeDelayGuard } from '@core/guards/fakeDelay.guard';


const routes: Routes = [{
  path: 'login',
  canActivate: [FakeDelayGuard],
  component: AuthenticationPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
