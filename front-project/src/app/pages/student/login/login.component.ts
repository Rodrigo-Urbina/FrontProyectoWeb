import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      password: new FormControl('', [Validators.required/*, Validators.minLength(5), Validators.maxLength(13)*/])
    })
  }

  login() {
    let body = this.loginForm.value;
    this.loginService.login(body.email, body.password)
      .subscribe((res) => {
        console.log("No hubo error");
        if(res.error) {
          console.log(res.error);
        } else {
          console.log(res);
          //this.router.navigate(['dashboard']);
        }
      }, (err) => {
        console.log("Hubo un error", err);
      })
  }

}
