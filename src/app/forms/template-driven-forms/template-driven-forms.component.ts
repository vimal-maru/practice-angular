import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-template-driven-forms',
  imports: [FooterComponent, RouterLink],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.css',
})
export class TemplateDrivenFormsComponent {}
