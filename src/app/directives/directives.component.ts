import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-directives',
  imports: [NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault, FooterComponent, RouterLink],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {
  leapYear = false;

  userList = [
    {
      userId: 101,
      userName: 'jarvis',
      userEmail: 'jarvis@gmail.com',
    },
    {
      userId: 102,
      userName: 'tonny',
      userEmail: 'tonny@gmail.com',
    },
    {
      userId: 103,
      userName: 'dr.doom',
      userEmail: 'doom@gmail.com',
    },
    {
      userId: 104,
      userName: 'susen',
      userEmail: 'susen@gmail.com',
    },
  ];

  today = 'Monday';

  chnageTheDay(changeDay:string){
    this.today = changeDay;
  }
}
