import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from '../../core/services/users.service';
import { ICreateUserDTO } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: ICreateUserDTO) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    // return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return this.usersService.findOne(+id);
  }
}
