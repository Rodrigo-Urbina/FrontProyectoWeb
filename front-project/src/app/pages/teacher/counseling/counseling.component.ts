import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-counseling',
  templateUrl: './counseling.component.html',
  styleUrls: ['./counseling.component.css']
})
export class TeacherCounselingComponent implements OnInit {

  pasts!: any;
  futures!: any;
  body!: any;

  constructor(private router: Router,
              private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.getPastTutorings();
    this.getFutureTutorings();
  }

  getPastTutorings() {
    this.teacherService.getPastTutoring()
      .subscribe((res) => {
        console.log(res);
        this.pasts = res;
      }, (err) => {
        console.log("Error: ", err);
      })
  }

  getFutureTutorings() {
    this.teacherService.getFutureTutoring()
      .subscribe((res) => {
        console.log(res);
        this.futures = res;
      }, (err) => {
        console.log("Error: ", err);
      })
  }

  cancelTutoring(id: number) {
    this.body = {
      "status": "cancelled",
      "response_teacher": "cancel"
    }
    this.teacherService.editTutoring(id, this.body)
      .subscribe((res) => {
        console.log(res);
        this.getFutureTutorings();
      }, (err) => {
        console.log("Error: ", err);
      })
  }

  confirmTutoring(id: number) {
    this.body = {
      "status": "confirmed",
      "response_teacher": "confirm"
    }
    this.teacherService.editTutoring(id, this.body)
      .subscribe((res) => {
        console.log(res);
        this.getFutureTutorings();
      }, (err) => {
        console.log("Error: ", err);
      })
  }
}
