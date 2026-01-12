import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-route-study',
  imports: [RouterLink, FooterComponent],
  templateUrl: './route-study.component.html',
  styleUrl: './route-study.component.css',
})
export class RouteStudyComponent {
  userData = {
    name: 'Jarvis',
    age: 25,
    email: 'jarvis@gmail.com',
  };

  constructor(private router: Router) {}

  goToMyProfile() {
    this.router.navigate(['profile'], {
      queryParams: {
        userDetail: JSON.stringify(this.userData),
      },
    });
  }

  employeList = [
    {
      id: 101,
      name: 'jarvis',
      email: 'jarvis@gmail.com',
    },
    {
      id: 102,
      name: 'tonny',
      email: 'tonny@gmail.com',
    },
    {
      id: 103,
      name: 'stark',
      email: 'stark@gmail.com',
    },
  ];
}
