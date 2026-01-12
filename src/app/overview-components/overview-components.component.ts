import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-overview-components',
  imports: [FooterComponent, RouterLink],
  templateUrl: './overview-components.component.html',
  styleUrl: './overview-components.component.css',
})
export class OverviewComponentsComponent {
  
}
