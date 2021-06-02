import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-counseling',
  templateUrl: './counseling.component.html',
  styleUrls: ['./counseling.component.css']
})
export class CounselingComponent implements OnInit {

  id!: number;
  appointments!: any;
  week!: any;
  date1 = new Date("01/01/2021");
  date2 = new Date("01/01/2022");
  public data: object[] = [{
    Id: 1,
    Subject: 'Meeting',
    StartTime: new Date(2021, 6, 2, 10, 0),
    EndTime: new Date(2021, 6, 2, 12, 30),
    isAllDay: false
  }];
  public eventSettings: EventSettingsModel = {
    dataSource: this.data
  }

  constructor(private studentService: StudentService,
              private actRoute: ActivatedRoute) {
                this.actRoute.params.subscribe(data => {
                  this.id = data.id
                })
              }

  ngOnInit(): void {

    this.week = {
      "from": (this.date1).toJSON(),
      "to": (this.date2).toJSON()
    }
    console.log(this.week);

    this.getAppointments();
  }

  getAppointments() {
    this.studentService.getAppointments(this.id, this.week)
      .subscribe((res) => {
        console.log(res);
        this.appointments = res;
      }, (err) => {
        console.log("Error", err);
      })
  }



}
