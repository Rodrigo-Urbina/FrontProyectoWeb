import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LOGIN } from 'src/app/constants/paths';
import { USERROLE } from 'src/app/constants/userRole';
import { TokenGuardService } from 'src/app/services/token-guard.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: any;

  constructor(private router: Router,
              private tokenService: TokenGuardService) { }

  ngOnInit(): void {
    this.user = this.tokenService.getUserData();

    console.log(this.user);
  }

  homepage() {
    let userData !: any;

    switch (this.user.role) {
        case 1: userData = USERROLE["admin"];
          break;
        case 2: userData = USERROLE["teacher"];
          break;
        case 3: userData = USERROLE["student"];
          break;
        default: userData = USERROLE["student"];
           break;
      }
    this.router.navigate([userData.homePage]);
  }

  config() {
    let userData !: any;
    switch (this.user.role) {
        case 1: userData = USERROLE["admin"];
          break;
        case 2: userData = USERROLE["teacher"];
          break;
        case 3: userData = USERROLE["student"];
          break;
        default: userData = USERROLE["student"];
           break;
      }
    this.router.navigate([userData.config]);
  }

  logout() {
    let userData !: any;
    localStorage.removeItem("currentUser");
    switch (this.user.role) {
        case 1: userData = USERROLE["admin"];
          break;
        case 2: userData = USERROLE["teacher"];
          break;
        case 3: userData = USERROLE["student"];
          break;
        default: userData = USERROLE["student"];
           break;
      }
    this.router.navigate([userData.login]);
  }

}
