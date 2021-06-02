import { Component, OnInit } from '@angular/core';
import { TokenGuardService } from 'src/app/services/token-guard.service';
@Component({
  selector: 'app-config-dashboard',
  templateUrl: './config-dashboard.component.html',
  styleUrls: ['./config-dashboard.component.css']
})
export class TeacherConfigDashboardComponent implements OnInit {

  user: any;

  constructor(private tokenService: TokenGuardService) { }

  ngOnInit(): void {
    this.user = this.tokenService.getUserData();
  }

}
