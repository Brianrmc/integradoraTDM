import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PruebastestPageRoutingModule } from './pruebastest-routing.module';

import { PruebastestPage } from './pruebastest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PruebastestPageRoutingModule
  ],
  declarations: [PruebastestPage]
})
export class PruebastestPageModule {}
