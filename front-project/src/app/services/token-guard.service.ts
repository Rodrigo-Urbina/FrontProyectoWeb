import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class TokenGuardService {

  constructor() { }

  public isAuthenticated(): boolean {
    const jwtHelper = new JwtHelperService();
    let user;

    if(localStorage.getItem("currentUser")) {
      user = JSON.parse(localStorage.getItem("currentUser") || '');
    } else {
      user = null;
    }

    console.log(user.jwt);


    if(user) {
      console.log(jwtHelper.isTokenExpired(user.jwt))
      return !jwtHelper.isTokenExpired(user.jwt);
    }
    return false;
  }

  public isLoggedIn(): boolean {
    if(localStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }

  public getUserData(): any {
    let jwtHelper = new JwtHelperService();
    let user;
    if(localStorage.getItem("currentUser")) {
      user = JSON.parse(localStorage.getItem("currentUser") || '');
    } else {
      user = null;
    }


    if(user) {
      return jwtHelper.decodeToken(user.jwt);
    }
    return '';
  }
}
