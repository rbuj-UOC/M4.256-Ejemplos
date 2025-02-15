import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { UserDTO } from './user.dto';

@Controller('user')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('getAll')
  async getAll() {
    return await this.usersService.getAll();
  }

  @Get('getOne/:id')
  async getOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return await this.usersService.getOne(id);
  }

  @Post('create')
  async addUser(@Body() userData: UserDTO) {
    await this.usersService.addUser(userData);
    return 'User added successfully';
  }

  @Put('update/:id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: UserDTO,
  ) {
    await this.usersService.updateUser(id, updateData);
    return 'User updated successfully';
  }

  @Delete('delete/:id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    await this.usersService.deleteUser(id);
    return 'User deleted successfully';
  }
}
