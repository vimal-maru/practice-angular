import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../interface/userinterface';
import { UserserviceService } from '../../../services/userservice.service';
import { RouterLink } from "@angular/router";
import { FooterComponent } from "../../../footer/footer.component";

@Component({
  selector: 'app-template-form-user',
  imports: [FormsModule],
  templateUrl: './template-form-user.component.html',
  styleUrl: './template-form-user.component.css',
})
export class TemplateFormUserComponent {
  userList: User[] = [];
  selectedUser: User | undefined;

  userserviceService = inject(UserserviceService)
  //constructor(private userserviceService: UserserviceService) {}

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
