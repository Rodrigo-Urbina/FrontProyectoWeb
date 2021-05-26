import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

export interface CatalogTeacher {
  position: number;
  subject: string;
  grade: number;
}

const ELEMENT_DATA: CatalogTeacher[] = [
  {position: 1, subject: 'Calculo integral', grade: 4},
  {position: 2, subject: 'Calculo diferencial', grade: 9},
  {position: 3, subject: 'Fisica', grade: 1},
  {position: 4, subject: 'Quimica', grade: 6},
  {position: 5, subject: 'Calculo integral', grade: 10},
  {position: 6, subject: 'Quimica', grade: 8},
  {position: 7, subject: 'Finanzas', grade: 4},
  {position: 8, subject: 'Fisica', grade: 10},
  {position: 9, subject: 'Calculo diferencial', grade: 0},
  {position: 10, subject: 'Fisica', grade: 9},
];

@Component({
  selector: 'app-detail-teacher',
  templateUrl: './detail-teacher.component.html',
  styleUrls: ['./detail-teacher.component.css']
})
export class DetailTeacherComponent implements OnInit {

  id!: number;
  teacher!: any;

  displayedColumns: string[] = ['position', 'subject', 'grade'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

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
