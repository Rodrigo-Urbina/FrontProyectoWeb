import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-counselings',
  templateUrl: './counselings.component.html',
  styleUrls: ['./counselings.component.css']
})
export class CounselingsComponent implements OnInit {

  pasts!: any;
  futures!: any;
  body!: any;

  constructor(private router: Router,
              private studentService: StudentService) { }

  ngOnInit(): void {
    this.getPastTutorings();
    this.getFutureTutorings();

    this.body = {
      "status": "cancelled",
      "response_student": "cancel"
    }
  }

  getPastTutorings() {
    this.studentService.getPastTutoring()
      .subscribe((res) => {
        console.log(res);
        this.pasts = res;
      }, (err) => {
        console.log("Error: ", err);
      })
  }

  getFutureTutorings() {
    this.studentService.getFutureTutoring()
      .subscribe((res) => {
        console.log(res);
        this.futures = res;
      }, (err) => {
        console.log("Error: ", err);
      })
  }

  cancelTutoring(id: number) {
    this.studentService.editTutoring(id, this.body)
      .subscribe((res) => {
        console.log(res);
        this.getFutureTutorings();
      }, (err) => {
        console.log("Error: ", err);
      })
  }

}
