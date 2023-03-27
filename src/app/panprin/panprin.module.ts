import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanprinPageRoutingModule } from './panprin-routing.module';

import { PanprinPage } from './panprin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanprinPageRoutingModule
  ],
  declarations: [PanprinPage]
})
export class PanprinPageModule {}
