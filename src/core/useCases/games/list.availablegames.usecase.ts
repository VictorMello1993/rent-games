import { Injectable } from '@nestjs/common';
import { GameViewModel } from '../../dtos/games/game.viewmodel';
import { IGamesRepository } from '../../repositories/igames.repository';
import { IBaseUseCase } from '../base.usecase';

@Injectable()
export class ListAvailableGamesUseCase implements IBaseUseCase<null, Promise<GameViewModel[]>> {
  constructor(private readonly _gamesRepository: IGamesRepository) {}

  async execute(): Promise<GameViewModel[]> {
    return await this._gamesRepository.listAll();
  }
}
