import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-list-admins',
  templateUrl: './list-admins.component.html',
  styleUrls: ['./list-admins.component.css']
})
export class ListAdminsComponent implements OnInit {

  users!: any;

  constructor(private router: Router,
              private adminService: AdminService) { }

  ngOnInit(): void {
    this.getAdmins();
  }

  getAdmins() {
    this.adminService.getAdmins()
      .subscribe((res) => {
        console.log(res);
        this.users = res;
      }, (err) => {
        console.log("Error: ", err);
      })
  }

  updateUser(id: number, body: any) {
    this.adminService.updateUser(id, body)
      .subscribe((res) => {
        console.log(res);
        this.getAdmins();
      }, (err) => {
      console.log("Error:", err);
      })
  }

}
