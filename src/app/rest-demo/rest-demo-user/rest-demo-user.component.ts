import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-rest-demo-user',
  imports: [FooterComponent],
  templateUrl: './rest-demo-user.component.html',
  styleUrl: './rest-demo-user.component.css',
})
export class RestDemoUserComponent implements OnInit {
  http = inject(HttpClient);

  userList: [] | any = [];

  isUserLoded = false;

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.isUserLoded = true;
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((users) => {
        this.userList = users;
        this.isUserLoded = false;
      });
  }
}
