import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Game } from '../../core/entities/Game';
import { IGamesRepository } from '../../core/repositories/igames.repository';
import { ICreateGameDTO } from '../../presentation/games/dtos/create-game.dto';

@Injectable()
export class GamesRepository implements IGamesRepository {
  constructor(
    @InjectRepository(Game)
    private gamesRepository: Repository<Game>,
  ) {}
  async create({ name, description, genre, releaseDate, dailyRate, fineAmount }: ICreateGameDTO) {
    const game = this.gamesRepository.create({
      name,
      description,
      genre,
      releaseDate,
      dailyRate,
      fineAmount,
    });

    await this.gamesRepository.save(game);

    return game;
  }
}
