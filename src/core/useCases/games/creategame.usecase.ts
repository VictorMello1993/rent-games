import { Inject, Injectable } from '@nestjs/common';
import { AppError } from '../../../utils/errors/app.error';
import { convertToArray, convertToDateObject } from '../../../utils/helpers/date.helpers';
import { CreateGameInputModel } from '../../dtos/games/creategame.inputmodel';
import { GameViewModel } from '../../dtos/games/game.viewmodel';
import { Genre } from '../../entities/Game';
import { IGamesRepository } from '../../repositories/igames.repository';
import { IBaseUseCase } from '../base.usecase';

@Injectable()
export class CreateGameUseCase implements IBaseUseCase<CreateGameInputModel, Promise<GameViewModel>> {
  constructor(
    @Inject('IGamesRepository')
    private _gamesRepository: IGamesRepository,
  ) {}
  async execute({
    name,
    description,
    genre,
    releaseDate,
    dailyRate,
    fineAmount,
  }: CreateGameInputModel): Promise<GameViewModel> {
    const game = await this._gamesRepository.findByName(name);

    if (game) {
      throw new AppError('Jogo já existe com nome informado.');
    }

    const genres = Object.values(Genre);
    const genreIsValid = genres.includes(genre);

    if (!genreIsValid) {
      throw new AppError('Gênero inválido');
    }

    const newGame = await this._gamesRepository.create({
      name,
      description,
      genre,
      releaseDate,
      dailyRate,
      fineAmount,
    });

    return {
      id: newGame.id,
      name: newGame.name,
      description: newGame.description,
      genre: newGame.genre,
      releaseDate: newGame.releaseDate,
      dailyRate: newGame.dailyRate,
      fineAmount: newGame.fineAmount,
    };
  }
}
