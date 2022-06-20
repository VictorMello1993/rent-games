import { Inject, Injectable } from '@nestjs/common';
import { GamesRepository } from '../../../infra/repositories/games.repository';
import { GameViewModel } from '../../dtos/games/game.viewmodel';
import { IGamesRepository } from '../../repositories/igames.repository';
import { IBaseUseCase } from '../base.usecase';

@Injectable()
export class ListAvailableGamesUseCase implements IBaseUseCase<null, Promise<GameViewModel[]>> {
  constructor(
    @Inject('IGamesRepository')
    private readonly _gamesRepository: IGamesRepository,
  ) {}

  async execute(): Promise<GameViewModel[]> {
    return await this._gamesRepository.listAll();
  }
}
