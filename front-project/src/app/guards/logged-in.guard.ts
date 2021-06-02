import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { HOME, LOGIN } from '../constants/paths';
import { USERROLE } from '../constants/userRole';
import { TokenGuardService } from '../services/token-guard.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {

  constructor(private tokenGuardService: TokenGuardService,
              private router: Router) {  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    if(!this.tokenGuardService.isLoggedIn()){
      console.log("no hay currentUser")
      return true;
    } else {
      let user = this.tokenGuardService.getUserData();
      let role = user["role"];
      let userData!: any;

      switch (role) {
        case 1: userData = USERROLE["admin"];
          break;
        case 2: userData = USERROLE["teacher"];
          break;
        case 3: userData = USERROLE["student"];
          break;
        default: userData = USERROLE["student"];
           break;
      }

      userData !== undefined
      ? this.router.navigate([userData.homePage])
      : this.router.navigate([userData.login]); // change for HOME

      return false;

    }
    // this.router.navigate(['dashboard']);
    // return false;
  }

}
