import { Component, OnInit } from '@angular/core';
import { UserDto } from '../../models/user-dto.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  user: UserDto;

  constructor() {
    this.user = new UserDto('', '', '', '', new Date(), '', '');
  }

  ngOnInit(): void {
    this.user.email = 'info@uoc.edu';
  }

  checkLogin(): void {
    console.log('User email --> ' + this.user.email + ' User password --> ' + this.user.password);
  }
}
