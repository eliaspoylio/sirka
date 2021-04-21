import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  name = new FormControl('');

  UserInformation: any;
  constructor() { }

  ngOnInit(): void {
    this.getUserInformation();
  }

  getUserInformation() {
    let data = {
      "name": "testi esimerkki",
      "email": "test@test.com"
    };
    this.setUserInformation(data);
  }

  setUserInformation(data) {
    this.UserInformation = data;
    this.UserInformation.username = (this.UserInformation.name);
  }


}
