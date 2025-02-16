import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    try {
      const user = await this.usersService.getOneByEmail(email);
      if (!user) {
        throw new Error('User does not exist');
      }
      const matchPasswords = await user.validatePassword(pass);
      if (!matchPasswords) {
        throw new Error('Invalid password');
      }
      const { password, ...result } = user;
      return result;
    } catch (error) {
      return null;
    }
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
