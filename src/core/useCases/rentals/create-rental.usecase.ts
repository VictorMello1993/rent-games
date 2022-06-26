import { Inject, Injectable } from '@nestjs/common';
import { AppError } from '../../../utils/errors/app.error';
import { compareInDays, dateNow } from '../../../utils/helpers/date.helpers';
import { CreateRentalInputModel } from '../../dtos/rentals/create-rental.inputmodel';
import { RentalViewModel } from '../../dtos/rentals/rental.viewmodel';
import { IGamesRepository } from '../../repositories/igames.repository';
import { IRentalsRepository } from '../../repositories/irentals.repository';
import { IBaseUseCase } from '../base.usecase';

@Injectable()
export class CreateRentalUseCase implements IBaseUseCase<CreateRentalInputModel, Promise<RentalViewModel>> {
  constructor(
    @Inject('IRentalsRepository')
    private _rentalsRepository: IRentalsRepository,

    @Inject('IGamesRepository')
    private _gamesRepository: IGamesRepository,
  ) {}
  async execute({ gameId, userId, expectedReturnDate }: CreateRentalInputModel): Promise<RentalViewModel> {
    const mininumDay = 7;

    const gameUnavailable = await this._rentalsRepository.findUnavailableGames(gameId);

    if (gameUnavailable) {
      throw new AppError('Jogo indisponível para aluguel.');
    }

    const gameAlreadyRentByUser = await this._rentalsRepository.findGameAlreadyRentByUser(userId);

    if (gameAlreadyRentByUser) {
      throw new AppError('Já existe um aluguel em aberto por este usuário.');
    }

    const currentDate = dateNow();
    const compare = compareInDays(currentDate.toLocaleDateString('pt-BR'), expectedReturnDate);

    if (compare < mininumDay) {
      throw new AppError('Tempo de retorno inválido');
    }

    const rental = await this._rentalsRepository.create({ gameId, userId, expectedReturnDate });

    await this._gamesRepository.updateAvailable(gameId, false);

    return {
      id: rental.id,
      userId: rental.userId,
      gameId: rental.gameId,
      expectedReturnGate: rental.expectedReturnDate,
      startDate: rental.startDate,
      endDate: rental.endDate,
    };
  }
}
