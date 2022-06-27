import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGameInputModel } from '../../core/dtos/games/create-game.inputmodel';
import { Game } from '../../core/entities/Game';
import { IGamesRepository } from '../../core/repositories/igames.repository';
import { convertToArray, convertToDateObject } from '../../utils/helpers/date.helpers';

@Injectable()
export class GamesRepository implements IGamesRepository {
  constructor(
    @InjectRepository(Game)
    private gamesRepository: Repository<Game>,
  ) {}

  async create({ name, description, genre, releaseDate, dailyRate, fineAmount }: CreateGameInputModel) {
    const releaseDateArray = convertToArray(releaseDate);
    const releaseDateObj = convertToDateObject(releaseDateArray);

    const game = this.gamesRepository.create({
      name,
      description,
      genre,
      releaseDate: releaseDateObj,
      dailyRate,
      fineAmount,
    });

    await this.gamesRepository.save(game);

    return game;
  }

  async listAll(): Promise<Game[]> {
    return await this.gamesRepository.find({
      where: {
        available: true,
      },
    });
  }

  async findByName(name: string): Promise<Game> {
    return await this.gamesRepository.findOne({
      where: {
        name,
      },
    });
  }

  async updateAvailable(id: string, available: boolean): Promise<void> {
    await this.gamesRepository
      .createQueryBuilder()
      .update()
      .set({ available })
      .where('id = :id')
      .setParameters({ id })
      .execute();
  }

  async findById(id: string): Promise<Game> {
    return await this.gamesRepository.findOne({
      where: {
        id,
      },
    });
  }
}
