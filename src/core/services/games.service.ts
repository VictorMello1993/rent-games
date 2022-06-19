import { Injectable } from '@nestjs/common';
import { GamesRepository } from '../../infra/repositories/games.repository';
import { AppError } from '../../utils/errors/app.error';
import { convertToArray, convertToDateObject } from '../../utils/helpers/date.helpers';
import { ICreateGameInputModel } from '../dtos/games/create.game.input.model';
import { GameViewModel } from '../dtos/games/game.view.model';
import { Game, Genre } from '../entities/Game';

@Injectable()
export class GamesService {
  constructor(private gamesRepository: GamesRepository) {}

  async create({
    name,
    description,
    genre,
    releaseDate,
    dailyRate,
    fineAmount,
  }: ICreateGameInputModel): Promise<GameViewModel> {
    const game = await this.gamesRepository.findByName(name);

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

    return await this.gamesRepository.create({
      name,
      description,
      genre,
      releaseDate: releaseDateFormatted,
      dailyRate,
      fineAmount,
    });
  }

  async findAll(): Promise<GameViewModel[]> {
    return await this.gamesRepository.listAll();
  }
}
