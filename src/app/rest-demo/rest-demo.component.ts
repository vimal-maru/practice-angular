import { Component } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { User } from '../interface/userinterface';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rest-demo',
  imports: [FormsModule],
  templateUrl: './rest-demo.component.html',
  styleUrl: './rest-demo.component.css',
})
export class RestDemoComponent {
  productList: any;
  userList: User[] = [];
  selectedUser: User | undefined;

  constructor(private userserviceService: UserserviceService) {}

  getAllProduct() {
    this.userserviceService.getProductList().subscribe((data: any) => {
      this.productList = data.products;
    });
  }

  hideAllProduct() {
    this.productList = [];
  }

  getALlUsers() {
    this.userserviceService.getUsers().subscribe((data: User[]) => {
      this.userList = data;
    });
  }

  saveUser(user: User) {
    if (!this.selectedUser) {
      //create user
      this.userserviceService.saveUser(user).subscribe((data: User) => {
        if (data) {
          this.getALlUsers();
        }
      });
    } else {
      //update user
      const userData = { ...user, id: this.selectedUser?.id };

      this.userserviceService.updateUser(userData).subscribe((data) => {
        if (data) {
          this.getALlUsers();
        }
      });
    }
  }

  deleteUser(id: string) {
    this.userserviceService.deleteUser(id).subscribe((data: User) => {
      if (data) {
        this.getALlUsers();
      }
    });
  }

  getUserById(id: string) {
    this.userserviceService.getUserById(id).subscribe((data: User) => {
      this.selectedUser = data;
    });
  }
}
