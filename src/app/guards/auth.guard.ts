import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  return true;
};
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = !!localStorage.getItem(''); //token que se tiene que armar

    if (isAuthenticated) {
      return true; 
    } else {
      this.router.navigate(['/login']); // Redirige al login si no esta auntentificado
      return false;
    }
  }
}
