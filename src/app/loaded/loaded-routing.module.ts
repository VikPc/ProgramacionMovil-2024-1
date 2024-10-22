import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadedPage } from './loaded.page';

const routes: Routes = [
  {
    path: 'usuario',
    loadChildren: () => import('../usuario/usuario.module').then(m => m.UsuarioPageModule) // Carga perezosa desde fuera del módulo loaded
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadedPageRoutingModule {}
