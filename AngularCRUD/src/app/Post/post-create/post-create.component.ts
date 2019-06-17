import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Service/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/Model/employee.model';
declare var M: any;
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
  providers: [EmployeeService]
})
export class PostCreateComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }


  ngOnInit() {
    this.resetForm();
    this.listEmployees();
  }

  createEmployee(form: NgForm) {
    if (form.value.id === '') {
      this.employeeService.postEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        M.toast({html: 'saved successfully', classes: 'rounded'});
        this.listEmployees();
      });
    } else {
      this.employeeService.putEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        M.toast({html: 'Updated successfully', classes: 'rounded'});
        this.listEmployees();
      });
    }

  }

  listEmployees() {
    this.employeeService.getEmployee().subscribe((res) => {
      this.employeeService.employees = res as Employee[];
    });
  }

  putEmployee(emp: Employee) {
    console.log(emp);
    this.employeeService.selectedEmployee = emp;
  }

  deleteEmployee(emp: Employee) {
    this.employeeService.deleteEmployee(emp).subscribe((res) => {
      M.toast({html: 'Deleted successfully', classes: 'rounded'});
      this.listEmployees();
    });
  }

  resetForm(Form?: NgForm) {
    if (Form) {
      Form.reset();
  }
    this.employeeService.selectedEmployee = {
    _id: '',
    name: '',
    position: '',
    office: '',
    salary: null
};
}
}
