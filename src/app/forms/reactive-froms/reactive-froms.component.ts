import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-froms',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './reactive-froms.component.html',
  styleUrl: './reactive-froms.component.css',
})
export class ReactiveFromsComponent {
  //form with individual values

  userName = new FormControl('jarvis');
  password = new FormControl('admin123');

  onButtonSubmit() {
    this.userName.setValue('jarvis');
    this.password.setValue('admin123');
  }

  //form with grouping

  employeeProfileData = new FormGroup({
    employeeName: new FormControl('', [Validators.required]),
    employeePassword: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    employeeEmail: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$'),
    ]),
  });

  onFormSubmit() {
    console.log(this.employeeProfileData.value);
  }

  get employeeName() {
    return this.employeeProfileData.get('employeeName');
  }

  get employeePassword() {
    return this.employeeProfileData.get('employeePassword');
  }

  get employeeEmail() {
    return this.employeeProfileData.get('employeeEmail');
  }
}
