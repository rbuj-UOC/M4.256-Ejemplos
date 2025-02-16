import { IsString } from '@nestjs/class-validator';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserDTO {
  @IsString()
  @IsNotEmpty({ message: 'Please define a user name' })
  username: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Please define an email' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Please define a password' })
  password: string;
}
