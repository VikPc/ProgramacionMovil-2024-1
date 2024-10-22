import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuestraPage } from './muestra.page';

const routes: Routes = [
  {
    path: '',
    component: MuestraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuestraPageRoutingModule {}
