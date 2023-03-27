import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PruebastestPage } from './pruebastest.page';

const routes: Routes = [
  {
    path: '',
    component: PruebastestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PruebastestPageRoutingModule {}
