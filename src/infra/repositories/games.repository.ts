import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ICreateGameInputModel } from '../../core/dtos/games/creategame.inputmodel';
import { Game } from '../../core/entities/Game';
import { IGamesRepository } from '../../core/repositories/igames.repository';

@Injectable()
export class GamesRepository implements IGamesRepository {
  constructor(
    @InjectRepository(Game)
    private gamesRepository: Repository<Game>,
  ) {}

  async create({ name, description, genre, releaseDate, dailyRate, fineAmount }: ICreateGameInputModel) {
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

  async listAll(): Promise<Game[]> {
    return this.gamesRepository.find({
      where: {
        available: true,
      },
    });
  }

  async findByName(name: string): Promise<Game> {
    return this.gamesRepository.findOne({
      where: {
        name,
      },
    });
  }

  async updateAvailable(gameId: string, available: boolean): Promise<void> {
    await this.gamesRepository
      .createQueryBuilder()
      .update()
      .set({ available })
      .where('id = :id')
      .setParameters({ id: gameId })
      .execute();
  }
}
