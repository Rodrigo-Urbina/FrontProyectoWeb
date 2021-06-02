import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LOGIN, REGISTER } from 'src/app/constants/paths';
import { RegisterService } from 'src/app/services/register.service';
import { MustMatch } from '../../../helpers/must-match.validator';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private registerService: RegisterService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(13)]),
      confirmPassword: new FormControl('', Validators.required)
    }, {
      validator: MustMatch('password', 'confirmPassword')
    })
  }

  register() {
    let body = this.registerForm.value;

    let newBody = {
      "email": body.email,
      "name_first": body.firstName,
      "name_last": body.lastName,
      "password": body.password
    }

    console.log(newBody);

    this.registerService.register(newBody).subscribe((res) => {
      if(res.status) {
        return console.log(res);
      }
      this.router.navigate([LOGIN]);
    }, (err) => {
      if(err.status == 200) {
        this.router.navigate([LOGIN])
      }
      alert("This email has already been registered, try with a different email")
      console.log("error", err)
    })

  }

}
