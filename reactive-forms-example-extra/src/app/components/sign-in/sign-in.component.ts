import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { checkInvalidKeyWord } from '../../directives/check-invalid-keyword.validator';
import { UserDto } from '../../models/user-dto.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  user: UserDto;
  email: FormControl;
  password: FormControl;
  name: FormControl;
  surname1: FormControl;
  surname2: FormControl;
  alias: FormControl;
  birthDate: FormControl;
  registerForm: FormGroup;
  isValidForm: boolean | null;

  constructor(private formBuilder: FormBuilder) {
    this.user = new UserDto('', '', '', '', new Date(), '', '');
    this.email = new FormControl(this.user.email, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'), checkInvalidKeyWord(/info.uoc.edu/)]);
    this.password = new FormControl(this.user.password, [Validators.required, Validators.minLength(8)]);
    this.name = new FormControl(this.user.name, [Validators.required, Validators.minLength(5), Validators.maxLength(25)]);
    this.surname1 = new FormControl(this.user.surname1, [Validators.required, Validators.minLength(5), Validators.maxLength(25)]);
    this.surname2 = new FormControl(this.user.surname2, [Validators.minLength(5), Validators.maxLength(25)]);
    this.alias = new FormControl(this.user.alias, Validators.required);
    this.birthDate = new FormControl(this.user.birthDate, [Validators.required, Validators.minLength(8)]);
    this.isValidForm = null;
    this.registerForm = this.formBuilder.group({
      email: this.email,
      password: this.password,
      name: this.name,
      surname1: this.surname1,
      surname2: this.surname2,
      alias: this.alias,
      birthDate: this.birthDate
    });
  }

  joinNow(): void {
    this.isValidForm = false;
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value);
    this.registerForm.reset();
  }
}
