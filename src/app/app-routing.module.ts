import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContainerComponent } from './container-page/main-container/main-container.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'restaurant'
  },
  {
    path: '',
    component: MainContainerComponent,
    children: [
      {
        path: 'restaurant',
        loadChildren: () => import('./Modules/restaurants/restaurants.module').then(m => m.RestaurantsModule),
      }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
