import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  bookTitle = 'How to make mark 42';
  author = 'MR.Stark';
  price = 1200;

  bgColorSuccess = 'bg-success';
  inputType = 'checkbox';

  bgColor = 'white';
  fontColor = 'black';
  border = '1px solid black';
  padding = '8px';

  bookName = 'The One Thing';
  bookPrice = 250;

  showMessage() {
    alert('welcome to data binding concepts');
  }

  changeTheme(selectedTheme: string) {
    if (selectedTheme == 'DARK') {
      this.darkTheme();
    } else {
      this.lightTheme();
    }
  }

  darkTheme() {
    this.bgColor = 'black';
    this.fontColor = 'white';
  }

  lightTheme() {
    this.bgColor = 'white';
    this.fontColor = 'black';
  }

  chnageBookPrice() {
    this.price = 500;
  }
}
