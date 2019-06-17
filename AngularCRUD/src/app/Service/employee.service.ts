import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../Model/employee.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  selectedEmployee: Employee;
  employees: Employee[];
  url = 'http://localhost:8080/Employee';
  constructor(private http: HttpClient) { }

  postEmployee(data: Employee) {
    const header: HttpHeaders = new HttpHeaders();
    console.log(data);
    return this.http.post(this.url, data);
  }

  getEmployee() {
    return this.http.get(this.url);
  }

  putEmployee(data: Employee) {

    return this.http.put(this.url + `/${data._id}`, data);
  }

  deleteEmployee(data: Employee) {
    if (confirm('Are You Sure, You want to Delete this record') === true) {
      return this.http.delete(this.url + `/${data._id}`);
    }
  }

}
