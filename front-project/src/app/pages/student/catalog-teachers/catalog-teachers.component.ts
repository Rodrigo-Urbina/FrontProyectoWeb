import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-catalog-teachers',
  templateUrl: './catalog-teachers.component.html',
  styleUrls: ['./catalog-teachers.component.css']
})
export class CatalogTeachersComponent implements OnInit {

  teachers!: any;

  constructor(private router: Router,
              private studentService: StudentService) {

  }

  ngOnInit(): void {
    this.getTeachers();
    console.log(this.teachers)
  }

  getTeachers() {
    this.studentService.getTeachers()
      .subscribe((res) => {
        console.log(res);
        this.teachers = res;
      }, (err) => {
        console.log("Error", err);
      })
  }
}
