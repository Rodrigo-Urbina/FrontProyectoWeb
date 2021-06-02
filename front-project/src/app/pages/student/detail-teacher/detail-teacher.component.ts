import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-detail-teacher',
  templateUrl: './detail-teacher.component.html',
  styleUrls: ['./detail-teacher.component.css']
})
export class DetailTeacherComponent implements OnInit {

  id!: number;
  teacher!: any;

  constructor(private studentService: StudentService,
              private actRoute: ActivatedRoute) {
    this.actRoute.params.subscribe(data => {
      this.id = data.id;
    })
   }

  ngOnInit(): void {
    this.getTeacher();
  }

  getTeacher() {
    this.studentService.getTeacher(this.id)
      .subscribe((res) => {
        console.log(res);
        this.teacher = res;
      }, (err) => {
        console.log("Error", err);
      })
  }

}
