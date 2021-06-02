import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TokenGuardService } from 'src/app/services/token-guard.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { MustMatch } from '../../../helpers/must-match.validator';
import { atLeastOne } from 'src/app/helpers/at-least-one';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  editForm!: FormGroup;
  user!: any;

  constructor(private tokenService: TokenGuardService,
    private formBuilder: FormBuilder,
    private router: Router,
    private studentService: StudentService) { }

  ngOnInit(): void {
    this.user = this.tokenService.getUserData();
    this.editForm = this.formBuilder.group({
      email: new FormControl('', [Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      firstname: new FormControl('', [Validators.minLength(5), Validators.maxLength(13)]),
      lastname: new FormControl('', [Validators.minLength(5), Validators.maxLength(13)]),
    }, { validator: atLeastOne(Validators.required) })
  }

  edit() {
    let body = this.editForm.value;

    let newBody = {
      "email": (body.email == "") ? this.user.email : body.email,
      "name_first": (body.firstname == "") ? this.user.name_first : body.firstname,
      "name_last": (body.lastname == "") ? this.user.name_last : body.lastname
    }

    console.log(newBody);

    this.studentService.updateStudent(this.user.id, newBody)
      .subscribe((res) => {
        console.log(res);
        this.user = this.tokenService.getUserData();
    }, (err) => {
      if(err.status == 200) {
        this.user = this.tokenService.getUserData();
      } else {
        alert("Invalid User Update");
        console.log("error", err)
      }
    })
  }
}
