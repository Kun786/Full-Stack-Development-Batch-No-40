import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserManagementService } from '../Services/user-management.service';

@Injectable({
  providedIn: 'root'
})
export class UserManagementGuard implements CanActivate {
  constructor(
    private readonly Router:Router,
    private readonly UserManagementService:UserManagementService
    ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.UserManagementService.checkIfUserLogin()) {
        this.Router.navigate(['/ManagementModule/sign-in']);
        return false;
      } else {
        return true;
      }
  }

}
