import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-list-teachers',
  templateUrl: './list-teachers.component.html',
  styleUrls: ['./list-teachers.component.css']
})
export class ListTeachersComponent implements OnInit {

  users!: any;

  constructor(private router: Router,
              private adminService: AdminService) { }

  ngOnInit(): void {
    this.getTeachers();
  }

  getTeachers() {
    this.adminService.getTeachers()
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
        this.getTeachers();
      }, (err) => {
      console.log("Error:", err);
      })
  }

}
