import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from 'src/app/Model/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  selectUser: User = {
    fullname: '',
    email: '',
    password: ''
  };
  constructor(private http: HttpClient) { }

  createUser(data: User) {
    console.log(data);
    return this.http.post(environment.apiBaseUrl + '/register', data);
  }

  signinUser(userCredntials) {
    return this.http.post(environment.apiBaseUrl + '/authenticate', userCredntials);
  }

  setToken(token) {
    localStorage.setItem('token', token);
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getToken() {
    localStorage.getItem('token');
  }
}
