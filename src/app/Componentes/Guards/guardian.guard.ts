import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Route, Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class GuardianGuard implements CanActivate {

  constructor (private router:Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(localStorage.getItem('token')){
        this.router.navigate(['inicio'])
        return true
      }else{
        this.router.navigate(['login'])
        return false
      }
  }
  
}
