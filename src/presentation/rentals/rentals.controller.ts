import { Controller, Post, Body, Inject } from '@nestjs/common';
import { CreateUserInputModel } from '../../core/dtos/users/createuser.inputmodel';
import { UserViewModel } from '../../core/dtos/users/user.viewmodel';
import { CreateUserUseCase } from '../../core/useCases/users/createuser.usecase';

@Controller('rentals')
export class RentalsController {
  constructor(private readonly _createRentalUseCase: CreateUserUseCase) {}

  @Post()
  create(@Body() request: CreateUserInputModel): Promise<UserViewModel> {
    return this._createRentalUseCase.execute(request);
  }
}
