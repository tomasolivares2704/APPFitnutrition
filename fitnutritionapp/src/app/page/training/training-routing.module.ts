import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingPage } from './training.page';


const routes: Routes = [
  {
    path: '',
    component: TrainingPage
  },
  {
    path: 'croosfit',
    loadChildren: () => import('./croosfit/croosfit.module').then( m => m.CroosfitPageModule)
  },
  {
    path: 'pesas',
    loadChildren: () => import('./pesas/pesas.module').then( m => m.PesasPageModule)
  },
  {
    path: 'rutinas',
    loadChildren: () => import('./rutinas/rutinas.module').then( m => m.RutinasPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingPageRoutingModule {}
