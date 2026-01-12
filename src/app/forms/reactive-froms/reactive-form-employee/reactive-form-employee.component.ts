import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Employee, IEmployee } from '../../../interface/iemployee';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from '../../../footer/footer.component';
import { DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-reactive-form-employee',
  imports: [FooterComponent, ReactiveFormsModule, UpperCasePipe, LowerCasePipe, DatePipe],
  templateUrl: './reactive-form-employee.component.html',
  styleUrl: './reactive-form-employee.component.css',
})
export class ReactiveFormEmployeeComponent implements OnInit{
  http = inject(HttpClient);

  employeeList: IEmployee[] = [];
  departmentList: any = [];
  designationList: any = [];

  appURL = 'https://api.freeprojectapi.com/api/EmployeeApp';

  employeeForm: FormGroup = new FormGroup({
    employeeId: new FormControl(0),
    fullName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    gender: new FormControl(''),
    dateOfJoining: new FormControl(),
    employeeType: new FormControl(''),
    salary: new FormControl(0),
    departmentId: new FormControl(0),
    designationId: new FormControl(0),
  });

  ngOnInit(): void {
    this.getAllEmployee();
    this.getAllDepartments();
  }

  getAllEmployee() {
    this.http
      .get(this.appURL + '/GetEmployees')
      .subscribe((employees: any) => (this.employeeList = employees));
  }

  //get departmets
  getAllDepartments() {
    this.http.get(this.appURL + '/GetDepartments').subscribe((departments) => {
      this.departmentList = departments;
    });
  }
  //get designations by department ID

  getDesignationsByDepartment() {
    const employee = this.employeeForm.value;

    this.http
      .get(
        this.appURL + '/GetDesignationsByDeptId?deptId=' + employee.departmentId
      )
      .subscribe((designations) => {
        this.designationList = designations;
      });
  }

  //save ne employee
  saveEmployee() {
    const employee = this.employeeForm.value;
    this.http
      .post<Employee>(this.appURL + '/CreateEmployee', employee)
      .subscribe((response: Employee) => {
        this.getAllEmployee();
      });
  }

  //UPDATE EMPLOYEE: 1- edit employee by ID
  editEmployee(employeeId: number) {
    //const employee = this.employeeForm.value;
    this.http
      .get<Employee>(this.appURL + '/' + employeeId)
      .subscribe((employeRespnse) => {
        // console.log(employeRespnse);
        // employee = employeRespnse;

        this.getDesignationsByDepartment();
      });
  }
  //UPDATE EMPLOYEE: 2- by put
  updateEmployee() {
    const employee = this.employeeForm.value;

    this.http
      .put<Employee>(
        this.appURL + '/UpdateEmployee?id=' + employee.employeeId,
        employee
      )
      .subscribe((employee: Employee) => {
        this.getAllEmployee();
      });
  }

  //delete employee
  deleteEmployee(employeeId: number) {
    this.http
      .delete(this.appURL + '/DeleteEmployee?id=' + employeeId)
      .subscribe(() => {
        this.getAllEmployee();
      });
  }
}
