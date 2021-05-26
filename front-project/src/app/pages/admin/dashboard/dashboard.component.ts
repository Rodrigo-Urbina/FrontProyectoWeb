import { Component, OnInit } from '@angular/core';
import { TokenGuardService } from 'src/app/services/token-guard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  user: any;

  constructor(private tokenService: TokenGuardService) { }

  ngOnInit(): void {
    this.user = this.tokenService.getUserData();
  }

}
