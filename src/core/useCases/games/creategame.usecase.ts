import { Injectable } from '@nestjs/common';
import { GamesRepository } from '../../../infra/repositories/games.repository';
import { AppError } from '../../../utils/errors/app.error';
import { convertToArray, convertToDateObject } from '../../../utils/helpers/date.helpers';
import { ICreateGameInputModel } from '../../dtos/games/creategame.inputmodel';
import { GameViewModel } from '../../dtos/games/game.viewmodel';
import { Genre } from '../../entities/Game';
import { IBaseUseCase } from '../base.usecase';

@Injectable()
export class CreateGameUseCase implements IBaseUseCase<ICreateGameInputModel, Promise<GameViewModel>> {
  constructor(private _gamesRepository: GamesRepository) {}

  async execute({
    name,
    description,
    genre,
    releaseDate,
    dailyRate,
    fineAmount,
  }: ICreateGameInputModel): Promise<GameViewModel> {
    const game = await this._gamesRepository.findByName(name);

    if (game) {
      throw new AppError('Jogo já existe com nome informado.');
    }

    const genres = Object.values(Genre);
    const genreIsValid = genres.includes(genre);

    if (!genreIsValid) {
      throw new AppError('Gênero inválido');
    }

    const dateArray = convertToArray(releaseDate);
    const releaseDateFormatted = convertToDateObject(dateArray);

    return await this._gamesRepository.create({
      name,
      description,
      genre,
      releaseDate: releaseDateFormatted,
      dailyRate,
      fineAmount,
    });
  }
}
