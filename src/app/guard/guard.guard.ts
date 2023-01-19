import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.hasUser()) {
      return true;
    }
    alert('Inicie Sesión');
    return false;
  }
  hasUser(): boolean {
    const alucard = localStorage.getItem('token');
    if (alucard === 'admin') {
      return true;
    } else {
      return false;
    }
  }
}
