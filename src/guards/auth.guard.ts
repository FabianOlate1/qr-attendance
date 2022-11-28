import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  // aqui comprobamos el inicio de sesion
  static itsCorrect = false;
  static username = '';

  constructor( private router:Router  ) { }

  // esta funcion nos retornara un valor dependiendo de si es o no correcto
  autorizar() {
    if (AuthGuard.itsCorrect == true){
      return true;
    } else {
      return false;
      this.router.navigate(['/login']);
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.autorizar();
  }
}
