import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { TokenGuardService } from 'src/app/services/token-guard.service';

@Component({
  selector: 'app-suscription',
  templateUrl: './suscription.component.html',
  styleUrls: ['./suscription.component.css']
})
export class SuscriptionComponent implements OnInit {

  user!: any;
  typeSub!: any;

  subscription!: String;

  constructor(private tokenService: TokenGuardService,
              private studentService: StudentService) { }

  ngOnInit(): void {
    this.user = this.tokenService.getUserData();
    this.typeSub = this.studentService.getSuscription();

    if(this.typeSub == 1){
      this.subscription = "BASICA";
    } else if(this.typeSub == 2){
      this.subscription = "ORO";
    } else {
      this.subscription = "PREMIUM"
    }
  }

}
