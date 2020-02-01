import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FakeDelayGuard } from '@core/guards/fakeDelay.guard';
import { HomePageComponent } from '@modules/home/pages/home/home-page.component';


const routes: Routes = [
  {
    path: '**',
    canActivate: [FakeDelayGuard],
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
