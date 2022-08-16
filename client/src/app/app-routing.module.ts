import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { RestaurantFormComponent } from './components/restaurant-form/restaurant-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/restaurantes',
    pathMatch: 'full'
  },
  {
    path: 'restaurantes',
    component: RestaurantListComponent
  },
  {
    path: 'restaurantes/nuevo',
    component: RestaurantFormComponent
  },
  {
    path: 'restaurantes/editar/:id',
    component: RestaurantFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
