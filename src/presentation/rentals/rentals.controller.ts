import { Controller, Post, Body, Inject } from '@nestjs/common';
import { CreateRentalInputModel } from '../../core/dtos/rentals/createrental.inputmodel';
import { RentalViewModel } from '../../core/dtos/rentals/rental.viewmodel';
import { CreateRentalUseCase } from '../../core/useCases/rentals/createrental.usecase';

@Controller('rentals')
export class RentalsController {
  constructor(private readonly _createRentalUseCase: CreateRentalUseCase) {}

  @Post()
  create(@Body() request: CreateRentalInputModel): Promise<RentalViewModel> {
    return this._createRentalUseCase.execute(request);
  }
}
