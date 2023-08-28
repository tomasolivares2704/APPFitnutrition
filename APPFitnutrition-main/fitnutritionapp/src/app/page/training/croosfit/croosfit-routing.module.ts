import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CroosfitPage } from './croosfit.page';

const routes: Routes = [
  {
    path: '',
    component: CroosfitPage
  },
  {
    path: 'cross-ejercicios',
    loadChildren: () => import('./cross-ejercicios/cross-ejercicios.module').then( m => m.CrossEjerciciosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CroosfitPageRoutingModule {}
