import { Component } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-userservicedemo',
  imports: [],
  templateUrl: './userservicedemo.component.html',
  styleUrl: './userservicedemo.component.css',
})
export class UserservicedemoComponent {
  userDataList: { userName: string; userEmail: string }[] | undefined;

  constructor(private userSerive: UserserviceService) {}

  getData() {
    this.userDataList = this.userSerive.getUserDataFromThisService();
  }
}
