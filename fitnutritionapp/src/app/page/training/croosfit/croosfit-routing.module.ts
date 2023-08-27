import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CroosfitPage } from './croosfit.page';

const routes: Routes = [
  {
    path: '',
    component: CroosfitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CroosfitPageRoutingModule {}
