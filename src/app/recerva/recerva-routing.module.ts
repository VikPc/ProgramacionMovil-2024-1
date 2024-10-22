import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecervaPage } from './recerva.page';

const routes: Routes = [
  {
    path: '',
    component: RecervaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecervaPageRoutingModule {}
