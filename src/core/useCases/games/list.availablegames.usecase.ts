import { Injectable } from '@nestjs/common';
import { GamesRepository } from '../../../infra/repositories/games.repository';
import { GameViewModel } from '../../dtos/games/game.viewmodel';
import { IBaseUseCase } from '../base.usecase';

@Injectable()
export class ListAvailableGamesUseCase implements IBaseUseCase<null, Promise<GameViewModel[]>> {
  constructor(private readonly _gamesRepository: GamesRepository) {}

  async execute(): Promise<GameViewModel[]> {
    return await this._gamesRepository.listAll();
  }
}
