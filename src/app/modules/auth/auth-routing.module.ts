import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationPage } from './pages/authentication/authentication.page';
import { FakeDelayGuard } from '../../core/guards/fakeDelay.guard';


const routes: Routes = [{
  path: 'login',
  canActivate: [FakeDelayGuard],
  component: AuthenticationPage
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
