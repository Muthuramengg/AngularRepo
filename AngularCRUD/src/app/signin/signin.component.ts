import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/User/user.service';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

Model: any = {
  Email: '',
  Password: ''
};
serverErrMsg: any;
emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    this.userService.signinUser(form.value).subscribe(
      res => {

        this.userService.setToken(res[`token`]);
        this.router.navigateByUrl('/postcreate');
      },
      err => {
        this.serverErrMsg = err.error.message;

      });

  }
}
