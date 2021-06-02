import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TokenGuardService } from 'src/app/services/token-guard.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { MustMatch } from '../../../helpers/must-match.validator';

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
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class TeacherProfileComponent implements OnInit {

  editForm!: FormGroup;
  user!: any;
  

  displayedColumns: string[] = ['position', 'subject', 'grade'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private tokenService: TokenGuardService,
    private formBuilder: FormBuilder,
    private router: Router,
    private registerService: RegisterService) { }


  ngOnInit(): void {
    this.user = this.tokenService.getUserData();
    this.editForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(13)]),
      surname: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(13)]),
    })
  }

  edit() {
    let body = this.editForm.value;

    let newBody = {
      "email": body.email,
      "name": body.name,
      "surname": body.name
    }
    console.log(newBody);

    this.registerService.register(newBody).subscribe((res) => {
      if(res.status) {
        return console.log(res);
      }
    })
  }
}
