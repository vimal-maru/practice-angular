import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reactive-froms',
  imports: [FooterComponent, RouterLink],
  templateUrl: './reactive-froms.component.html',
  styleUrl: './reactive-froms.component.css',
})
export class ReactiveFromsComponent {}
