import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CroosfitPageRoutingModule } from './croosfit-routing.module';

import { CroosfitPage } from './croosfit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CroosfitPageRoutingModule
  ],
  declarations: [CroosfitPage]
})
export class CroosfitPageModule {}
