import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FooterComponent } from '../../../footer/footer.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-template-form-person',
  imports: [FooterComponent,NgIf,FormsModule],
  templateUrl: './template-form-person.component.html',
  styleUrl: './template-form-person.component.css',
})
export class TemplateFormPersonComponent {
  userData: any;

  addUserData(val: NgForm) {
    this.userData = val;
  }
}
