import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HOME, LOGIN } from '../constants/paths';
import { USERROLE } from '../constants/userRole';
import { TokenGuardService } from '../services/token-guard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private tokenGuard: TokenGuardService,
              private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    //Evaluate if token is Expired
    if(this.tokenGuard.isAuthenticated()) {
      let user = this.tokenGuard.getUserData();
      let role = user["role"];
      let userData;

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

      console.log(userData)

      if(userData !== undefined) {
        if(userData['urls'].includes(next.routeConfig?.path!)) {
          return true;
        } else {
          this.router.navigate([userData['homePage']]);
          return false;
        }
      }

      return true;


      // this.router.navigate([''])
      // return false;
    } else {
      console.log('No hay token')
      this.router.navigate([LOGIN]); // change for HOME
      return false;
    }
  }

}
