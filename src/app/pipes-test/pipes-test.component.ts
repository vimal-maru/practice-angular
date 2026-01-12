import { Component } from '@angular/core';
import { CurrecnyConvertorPipe } from '../pipes/currecny-convertor.pipe';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-pipes-test',
  imports: [CurrecnyConvertorPipe, FooterComponent],
  templateUrl: './pipes-test.component.html',
  styleUrl: './pipes-test.component.css',
})
export class PipesTestComponent {
  amount = 1;
}
