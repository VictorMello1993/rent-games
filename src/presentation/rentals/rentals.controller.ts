import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { CreateRentalInputModel } from '../../core/dtos/rentals/create-rental.inputmodel';
import { RentalViewModel } from '../../core/dtos/rentals/rental.viewmodel';
import { CreateRentalUseCase } from '../../core/useCases/rentals/create-rental.usecase';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/roles/roles.decorator';
import { Role } from '../auth/roles/roles.enum';

@Controller('rentals')
export class RentalsController {
  constructor(private readonly _createRentalUseCase: CreateRentalUseCase) {}

  @Post()
  @Roles(Role.USER)
  @UseGuards(JwtAuthGuard, RolesGuard)
  create(
    @Request() { user },
    @Body() { gameId, expectedReturnDate }: CreateRentalInputModel,
  ): Promise<RentalViewModel> {
    return this._createRentalUseCase.execute({
      userId: user.user.id,
      gameId,
      expectedReturnDate,
    });
  }
}
