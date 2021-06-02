import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { TEACHER_DASHBOARD } from 'src/app/constants/paths';
import { USERROLE } from 'src/app/constants/userRole';
import { LoginService } from 'src/app/services/login.service';
import { TokenGuardService } from 'src/app/services/token-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class TeacherLoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private loginService: LoginService,
              private tokenGuard: TokenGuardService) { }

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
          this.router.navigate([TEACHER_DASHBOARD]);
        }
      }, (err) => {
        console.log("Hubo un error", err);
      })
  }

}
