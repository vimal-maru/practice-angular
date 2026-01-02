import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  userName: string | null = '';
  personName: string | null = '';
  userDetail: any = {};

  dynamicUserName: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    //1. receive data using url
    this.userName = this.route.snapshot.paramMap.get('name');

    //2. receieve data using the subscribe
    this.route.queryParamMap.subscribe((params) => {
      const data = params.get('userDetail');
      this.userDetail = data ? JSON.parse(data) : {};
    });
    //console.log('Test:', this.userDetail);

    //3. receive data from router data property

    this.route.data.subscribe((params) => {
      this.personName = params['personName'];
    });

    //DYNAMIC ROUTING or say data trasfer using params

    this.route.params.subscribe((param) => {
      this.dynamicUserName = param['name'];
    });
  }
}
