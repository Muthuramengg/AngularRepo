import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../Service/User/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserService]
})
export class SignupComponent implements OnInit {

  emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  registeredSuccess: boolean;
  errorMessages: string;

  constructor(public userService: UserService) { }

  ngOnInit() {
  }
  onsubmit(form: NgForm) {
    this.userService.createUser(form.value).subscribe(
      res => {
        this.registeredSuccess = true;
        setTimeout(() => this.registeredSuccess = false, 4000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.errorMessages = err.error.join('<br>');
        } else {
          this.errorMessages = 'Something is wrong,Please Contact admin.';
        }
      });
  }

  resetForm(form) {
    this.userService.selectUser = {
      fullname: '',
      email: '',
      password: ''
    };
    form.resetForm();
    this.errorMessages = '';
  }
}
