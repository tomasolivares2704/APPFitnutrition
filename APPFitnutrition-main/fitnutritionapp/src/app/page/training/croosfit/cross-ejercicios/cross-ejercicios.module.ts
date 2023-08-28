import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrossEjerciciosPageRoutingModule } from './cross-ejercicios-routing.module';

import { CrossEjerciciosPage } from './cross-ejercicios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrossEjerciciosPageRoutingModule
  ],
  declarations: [CrossEjerciciosPage]
})
export class CrossEjerciciosPageModule {}
