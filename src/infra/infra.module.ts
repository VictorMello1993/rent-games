import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from '../core/entities/Game';
import { Rental } from '../core/entities/Rental';
import { User } from '../core/entities/User';
import { GamesRepository } from './repositories/games.repository';
import { RentalsRepository } from './repositories/rentals.repository';
import { UsersRepository } from './repositories/users.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User, Game, Rental])],
  providers: [
    {
      provide: 'IGamesRepository',
      useClass: GamesRepository,
    },
    {
      provide: 'IUsersRepository',
      useClass: UsersRepository,
    },
    {
      provide: 'IRentalsRepository',
      useClass: RentalsRepository,
    },
  ],
  exports: [
    {
      provide: 'IUsersRepository',
      useClass: UsersRepository,
    },
    {
      provide: 'IGamesRepository',
      useClass: GamesRepository,
    },
    {
      provide: 'IRentalsRepository',
      useClass: RentalsRepository,
    },
  ],
})
export class InfraModule {}
