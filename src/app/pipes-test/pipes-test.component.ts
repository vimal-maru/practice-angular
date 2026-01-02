import { Component } from '@angular/core';
import { CurrecnyConvertorPipe } from '../pipes/currecny-convertor.pipe';

@Component({
  selector: 'app-pipes-test',
  imports: [CurrecnyConvertorPipe],
  templateUrl: './pipes-test.component.html',
  styleUrl: './pipes-test.component.css',
})
export class PipesTestComponent {
  amount = 1;
}
