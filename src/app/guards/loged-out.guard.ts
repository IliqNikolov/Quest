import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'
import { UserServiceService } from '../services/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class LogedOutGuard implements CanActivate {
  constructor(private router: Router, private userService : UserServiceService)
  {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.userService.IsLoggedin())
      {
        this.router.navigate(['/']);
        return false;
      }
      return true;
  }
  
}
