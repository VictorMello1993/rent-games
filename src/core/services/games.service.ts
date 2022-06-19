import { Injectable } from '@nestjs/common';
import { GamesRepository } from '../../infra/repositories/games.repository';
import { ICreateGameDTO } from '../../presentation/games/dtos/create-game.dto';
import { convertToArray, convertToDateObject } from '../../utils/helpers/date.helpers';
import { Game } from '../entities/Game';

@Injectable()
export class GamesService {
  constructor(private gamesRepository: GamesRepository) {}

  async create({ name, description, genre, releaseDate, dailyRate, fineAmount }: ICreateGameDTO): Promise<Game> {
    const dateArray = convertToArray(releaseDate);
    const releaseDateFormatted = convertToDateObject(dateArray);

    const game = await this.gamesRepository.create({
      name,
      description,
      genre,
      releaseDate: releaseDateFormatted,
      dailyRate,
      fineAmount,
    });

    return game;
  }

  findAll() {
    return `This action returns all games`;
  }
}
