import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanprinPage } from './panprin.page';

const routes: Routes = [
  {
    path: '',
    component: PanprinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanprinPageRoutingModule {}
