import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule, RouterLink, FooterComponent],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
})
export class FormsComponent {

}
