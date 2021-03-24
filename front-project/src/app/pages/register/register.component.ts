import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { MustMatch } from '../../helpers/must-match.validator';

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
              private registerService: RegisterService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
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
      "firstName": body.firstName,
      "lastName": body.lastName,
      "password": body.password
    }

    console.log(newBody);

    this.registerService.register(newBody).subscribe((res: Response) => {
      console.log(res);
      if(res.status) {
        return console.log(res);
      }
      this.router.navigate(['login']);
    }, (err) => {
      console.log("error", err)
    })

  }

}
