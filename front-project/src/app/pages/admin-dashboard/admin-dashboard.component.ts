import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminDashboardService } from 'src/app/services/admin-dashboard.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  users!: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private adminDashboardService: AdminDashboardService) {
  }

  ngOnInit(): void {
    this.users = [];
  }

  getUsers() {
    this.adminDashboardService.getUsers()
      .subscribe((res) => {
        console.log(res);
        this.users = res;
      }, (err) => {
      console.log("Error:", err);
      })
  }
  getStudents() {
    this.adminDashboardService.getStudents()
      .subscribe((res) => {
        console.log(res);
        this.users = res;
      }, (err) => {
      console.log("Error:", err);
      })
  }
  getAdmins() {
    this.adminDashboardService.getAdmins()
      .subscribe((res) => {
        console.log(res);
        this.users = res;
      }, (err) => {
      console.log("Error:", err);
      })
  }
  deleteUser(id: number) {
    this.adminDashboardService.deleteUser(id)
      .subscribe((res) => {
        console.log(res);
        this.getUsers();
      }, (err) => {
      console.log("Error:", err);
      })
  }
}
