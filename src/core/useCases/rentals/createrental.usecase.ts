import { Inject, Injectable } from '@nestjs/common';
import { AppError } from '../../../utils/errors/app.error';
import { compareInDays, dateNow } from '../../../utils/helpers/date.helpers';
import { CreateRentalInputModel } from '../../dtos/rentals/createrental.inputmodel';
import { RentalViewModel } from '../../dtos/rentals/rental.viewmodel';
import { IGamesRepository } from '../../repositories/igames.repository';
import { IRentalsRepository } from '../../repositories/irentals.repository';
import { IBaseUseCase } from '../base.usecase';

@Injectable()
export class CreateRentalUseCase implements IBaseUseCase<CreateRentalInputModel, RentalViewModel> {
  constructor(
    @Inject('IRentalsRepository')
    private _rentalsRepository: IRentalsRepository,

    @Inject('IGamesRepository')
    private _gamesRepository: IGamesRepository,
  ) {}
  async execute({ userId, gameId, expectedReturnDate }: CreateRentalInputModel) {
    const mininumDay = 7;

    const gameUnavailable = await this._rentalsRepository.findUnavailableGames(gameId);

    if (gameUnavailable) {
      throw new AppError('Jogo indisponível para aluguel.');
    }

    const gameAlreadyRentByUser = await this._rentalsRepository.findGameAlreadyRentByUser(userId);

    if (gameAlreadyRentByUser) {
      throw new AppError('Jogo já foi alugado.');
    }

    const currentDate = dateNow();
    const compare = compareInDays(currentDate, expectedReturnDate);

    if (compare < mininumDay) {
      throw new AppError('Tempo de retorno inválido');
    }

    const rental = this._rentalsRepository.create({ userId, gameId, expectedReturnDate });

    await this._gamesRepository.updateAvailable(gameId, false);

    return rental;
  }
}
