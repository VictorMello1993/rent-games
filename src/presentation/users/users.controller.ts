import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from '../../core/services/users.service';
import { IRequest } from './dtos/create.user.request.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() request: IRequest) {
    return this.usersService.create(request);
  }
}
