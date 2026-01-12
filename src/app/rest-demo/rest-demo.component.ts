import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rest-demo',
  imports: [FooterComponent, RouterLink],
  templateUrl: './rest-demo.component.html',
  styleUrl: './rest-demo.component.css',
})
export class RestDemoComponent {}
