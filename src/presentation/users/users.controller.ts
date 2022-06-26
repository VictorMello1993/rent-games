import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserInputModel } from '../../core/dtos/users/create-user.inputmodel';
import { UserViewModel } from '../../core/dtos/users/user.viewmodel';
import { CreateUserUseCase } from '../../core/useCases/users/create-user.usecase';

@Controller('users')
export class UsersController {
  constructor(private readonly _createUserUseCase: CreateUserUseCase) {}

  @Post()
  create(@Body() request: CreateUserInputModel): Promise<UserViewModel> {
    return this._createUserUseCase.execute(request);
  }
}
