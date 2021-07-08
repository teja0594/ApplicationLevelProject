import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  currentUser:any
  isLoggedIn:any
  constructor(private auth:AuthService) {
    this.auth.log.subscribe(data=> this.isLoggedIn=data)
    this.auth.user.subscribe(data=> this.currentUser=data)
  }
  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.currentUser.roles.includes("ADMIN"))
       return true
     else{
      alert(`You are not allowed to view this page
      only Admins can Access`);
      return false;
       }

  }

}
