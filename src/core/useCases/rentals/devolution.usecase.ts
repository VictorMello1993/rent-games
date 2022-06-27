import { Injectable, Inject } from '@nestjs/common';
import { AppError } from '../../../utils/errors/app.error';
import { compareInDays, dateNow } from '../../../utils/helpers/date.helpers';
import { CreateDevolutionInputModel } from '../../dtos/rentals/create-devolution.dto';
import { DevolutionViewModel } from '../../dtos/rentals/devolution.viewmodel';
import { IGamesRepository } from '../../repositories/igames.repository';
import { IRentalsRepository } from '../../repositories/irentals.repository';
import { IBaseUseCase } from '../base.usecase';

@Injectable()
export class DevolutionUseCase implements IBaseUseCase<CreateDevolutionInputModel, Promise<DevolutionViewModel>> {
  constructor(
    @Inject('IRentalsRepository')
    private _rentalsRepository: IRentalsRepository,

    @Inject('IGamesRepository')
    private _gamesRepository: IGamesRepository,
  ) {}
  async execute({ rentalId, userId }: CreateDevolutionInputModel): Promise<DevolutionViewModel> {
    const mininumDay = 7;
    const rental = await this._rentalsRepository.findById(rentalId);

    if (!rental) {
      throw new AppError('Aluguel inexistente.');
    }

    const game = await this._gamesRepository.findById(rental.gameId);

    if (!game) {
      throw new AppError('Jogo não cadastrado.');
    }

    const currentDate = dateNow();

    //Cálculo da diária
    let daily = compareInDays(rental.startDate.toLocaleDateString('pt-BR'), currentDate.toLocaleDateString('pt-BR'));

    if (daily <= 0) {
      daily = mininumDay;
    }

    //Obtendo os dias de atraso
    const delay = compareInDays(
      rental.expectedReturnDate.toLocaleDateString('pt-BR'),
      currentDate.toLocaleDateString('pt-BR'),
    );

    let total = 0;

    //Obtendo a multa proporcional aos dias de atraso
    if (delay > 0) {
      const fine = delay * game.fineAmount;
      total = fine;
    }

    //Total = diárias + multa
    total += daily * game.dailyRate;

    //Atualizando o aluguel com o valor total e a data de devolução
    rental.endDate = currentDate;
    rental.total = total;
    rental.updatedAt = dateNow();

    await this._rentalsRepository.create({
      gameId: rental.gameId,
      userId: rental.userId,
      expectedReturnDate: rental.expectedReturnDate.toLocaleDateString('pt-BR'),
      id: rental.id,
      endDate: rental.endDate,
      total: rental.total,
    });

    //Atualizando o status do jogo para disponível
    await this._gamesRepository.updateAvailable(rental.gameId, true);

    return {
      id: rental.id,
      userId: rental.userId,
      gameId: rental.gameId,
      expectedReturnGate: rental.expectedReturnDate,
      endDate: rental.endDate,
      startDate: rental.startDate,
      total: rental.total,
    };
  }
}
