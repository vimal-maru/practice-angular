import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-style',
  imports: [],
  templateUrl: './dynamic-style.component.html',
  styleUrl: './dynamic-style.component.css',
})
export class DynamicStyleComponent {
  mainDivWidth = '500';
  bgColor = 'white';
  fontColor = 'black';
  fontSize = '30px';
  border = '1px solid black';
  padding = '20px';

  darkTheme() {
    this.bgColor = 'black';
    this.fontColor = 'white';
  }

  lightTheme() {
    this.bgColor = 'white';
    this.fontColor = 'black';
  }
}
