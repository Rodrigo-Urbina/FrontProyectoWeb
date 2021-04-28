import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users!: any;

  constructor(private router: Router,
              private adminService: AdminService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {
    this.adminService.getStudents()
      .subscribe((res) => {
        console.log(res);
        this.users = res;
      }, (err) => {
        console.log("Error: ", err);
      })
  }

  deleteUser(id: number) {
    this.adminService.deleteUser(id)
      .subscribe((res) => {
        console.log(res);
        this.getStudents();
      }, (err) => {
      console.log("Error:", err);
      })
  }
}
