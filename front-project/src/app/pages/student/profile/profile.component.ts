import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TokenGuardService } from 'src/app/services/token-guard.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { MustMatch } from '../../../helpers/must-match.validator';

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
    private registerService: RegisterService) { }

  ngOnInit(): void {
    this.user = this.tokenService.getUserData();
    this.editForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      firstname: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(13)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(13)]),
    })
  }

  edit() {
    let body = this.editForm.value;

    let newBody = {
      "email": body.email,
      "firstname": body.name,
      "lastname": body.name
    }

    console.log(newBody);

    this.registerService.register(newBody).subscribe((res) => {
      if(res.status) {
        return console.log(res);
      }
    })
  }
}
