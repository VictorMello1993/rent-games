import { Inject, Injectable } from '@nestjs/common';
import { CreateRentalInputModel } from '../../dtos/rentals/createrental.inputmodel';
import { RentalViewModel } from '../../dtos/rentals/rental.viewmodel';
import { IRentalsRepository } from '../../repositories/irentals.repository';
import { IBaseUseCase } from '../base.usecase';

@Injectable()
export class CreateRentalUseCase implements IBaseUseCase<CreateRentalInputModel, RentalViewModel> {
  constructor(
    @Inject('IRentalsRepository')
    private _rentalsRepository: IRentalsRepository,
  ) {}
  async execute(input: CreateRentalInputModel) {}
}
