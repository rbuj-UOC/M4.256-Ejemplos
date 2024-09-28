import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserDto } from '../../models/user-dto.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  user: UserDto;

  constructor() {
    this.user = new UserDto('', '', '', '', new Date(), '', '');
  }

  signIn(form: NgForm): void {
    if (!form.valid) {
      console.error('User form is in an invalid state');
      return;
    }

    console.log(this.user);
    form.resetForm();
  }
}
