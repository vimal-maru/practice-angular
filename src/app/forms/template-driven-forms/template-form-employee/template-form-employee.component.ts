import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Employee, IEmployee } from '../../../interface/iemployee';
import { FooterComponent } from '../../../footer/footer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form-employee',
  imports: [FooterComponent, FormsModule],
  templateUrl: './template-form-employee.component.html',
  styleUrl: './template-form-employee.component.css',
})
export class TemplateFormEmployeeComponent {
  http = inject(HttpClient);
  employeeList: IEmployee[] = [];
  appURL = 'https://api.freeprojectapi.com/api/EmployeeApp';
  employee: Employee = new Employee();
  departmentList: any = [];
  designationList: any = [];

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
    this.http
      .get(
        this.appURL +
          '/GetDesignationsByDeptId?deptId=' +
          this.employee.departmentId
      )
      .subscribe((designations) => {
        this.designationList = designations;
      });
  }

  //save ne employee
  saveEmployee() {
    this.http
      .post<Employee>(this.appURL + '/CreateEmployee', this.employee)
      .subscribe((response: Employee) => {
        this.getAllEmployee();
      });
  }

  //UPDATE EMPLOYEE: 1- edit employee by ID
  editEmployee(employeeId: number) {
    this.http
      .get<Employee>(this.appURL + '/' + employeeId)
      .subscribe((employeRespnse) => {
        console.log(employeRespnse);
        this.employee = employeRespnse;

        this.getDesignationsByDepartment();
      });
  }
  //UPDATE EMPLOYEE: 2- by put
  updateEmployee() {
    this.http
      .put<Employee>(
        this.appURL + '/UpdateEmployee?id=' + this.employee.employeeId,
        this.employee
      )
      .subscribe((employee: Employee) => {
        console.log(employee);
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
