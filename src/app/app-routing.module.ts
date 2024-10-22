import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    //canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: 'login',/* PARA REEDIRECCIONAR LA PANTALLA PRINCIPAL UNA VEZ ARRANCADO EL AMBIENTE SE TIENE QUE*/
                        /*CAMBIAR LA 'REDIRECTO' */
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'principal',

    //canActivate: [AuthGuard],
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
    
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'loading',
    loadChildren: () => import('./loading/loading.module').then( m => m.LoadingPageModule),
    //canActivate: [AuthGuard],
  },
  
  {
    path: 'recerva',loadChildren: () => import('./recerva/recerva.module').then( m => m.RecervaPageModule),
  },
  {path: '', redirectTo: 'principal', pathMatch: 'full'},

  {
    path: 'usuario',
    loadChildren: () => import('./usuario/usuario.module').then( m => m.UsuarioPageModule),
    //canActivate: [AuthGuard],
  },
  {
    path: 'loaded',
    loadChildren: () => import('./loaded/loaded.module').then( m => m.LoadedPageModule)
  },
  {
    path: 'muestra',
    loadChildren: () => import('./muestra/muestra.module').then( m => m.MuestraPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./error404/error404.module').then( m => m.Error404PageModule)
  },






  


  


  
  
  
  //ionic generate page nombrepage = para crear nuevas vistas

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
