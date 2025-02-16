import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './users.entity';
import { UserDTO } from './user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getAll() {
    return await this.userRepository.find();
  }

  async getOne(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async getOneByUsername(username: string) {
    const user = await this.userRepository.findOne({ where: { username } });
    if (!user) {
      throw new NotFoundException(`User with username ${username} not found`);
    }
    return user;
  }

  async getOneByEmail(email: string) {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`);
    }
    return user;
  }

  async addUser(userData: UserDTO) {
    const { email, username, password } = userData;
    const user = this.userRepository.create({
      email,
      username,
      password,
    });
    return await this.userRepository.save(user);
  }

  async updateUser(id: number, updateData: UserDTO) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    this.userRepository.merge(user, updateData);
    return await this.userRepository.save(user);
  }

  async deleteUser(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return await this.userRepository.remove(user);
  }
}
