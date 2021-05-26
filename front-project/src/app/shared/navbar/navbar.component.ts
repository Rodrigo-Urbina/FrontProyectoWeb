import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    // console.log(this.user);
  }

  logout() {
    localStorage.removeItem("currentUser");
    this.router.navigate(['']);
  }

}
