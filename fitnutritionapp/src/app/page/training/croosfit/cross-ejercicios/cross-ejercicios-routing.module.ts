import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrossEjerciciosPage } from './cross-ejercicios.page';

const routes: Routes = [
  {
    path: '',
    component: CrossEjerciciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrossEjerciciosPageRoutingModule {}
