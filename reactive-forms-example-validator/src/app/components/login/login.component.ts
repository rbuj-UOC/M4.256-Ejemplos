import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { checkInvalidKeyWord } from '../../directives/check-invalid-keyword.validator';
import { UserDto } from '../../models/user-dto.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  user: UserDto;
  email: FormControl;
  password: FormControl;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.user = new UserDto('', '');
    this.email = new FormControl(this.user.email, [
      Validators.required,
      checkInvalidKeyWord(/info.uoc.edu/)
    ]);
    this.password = new FormControl(this.user.password, [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password
    });
  }

  checkLogin(): void {
    this.user.email = this.email.value;
    this.user.password = this.password.value;
    console.log(
      'User email --> ' +
        this.user.email +
        ' User password --> ' +
        this.user.password
    );
  }
}
