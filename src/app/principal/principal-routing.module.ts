import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalPage } from './principal.page';
import { LoginPage } from '../login/login.page';

const routes: Routes = [
  {
    path: '',
    component: PrincipalPage
  },
  { 
    path: 'principal',
    component: PrincipalPage 
  },
  { 
    path: 'login',
    component: LoginPage 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalPageRoutingModule {}
