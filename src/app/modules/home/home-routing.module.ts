import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FakeDelayGuard } from '@core/guards/fakeDelay.guard';
import { HomePageComponent } from '@modules/home/pages/home/home-page.component';


const routes: Routes = [{
  path: 'home',
  canActivate: [FakeDelayGuard],
  component: HomePageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
