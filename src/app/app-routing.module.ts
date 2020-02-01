import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FakeDelayGuard } from '@core/guards/fakeDelay.guard';
import { ThemeRoutes } from '@theme/theme-routes';
import { Error404PageComponent } from '@theme/pages/error-404/error-404-page.component';


const routes: Routes = [
  {
    path: 'home',
    canActivate: [FakeDelayGuard],
    loadChildren: () => import('@modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'theme',
    children: ThemeRoutes
  },
  {
    path: '',
    loadChildren: () => import('@modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    component: Error404PageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
