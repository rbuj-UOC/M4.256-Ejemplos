import { IsString } from '@nestjs/class-validator';
import { IsNotEmpty } from 'class-validator';

export class UserDTO {
  @IsString()
  @IsNotEmpty({ message: 'Please define a user name' })
  username: string;

  @IsString()
  @IsNotEmpty({ message: 'Please define a password' })
  password: string;
}
