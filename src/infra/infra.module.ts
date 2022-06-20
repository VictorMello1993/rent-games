import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from '../core/entities/Game';
import { User } from '../core/entities/User';
import { GamesRepository } from './repositories/games.repository';
import { UsersRepository } from './repositories/users.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User, Game])],
  providers: [
    {
      provide: 'IGamesRepository',
      useClass: GamesRepository,
    },
    {
      provide: 'IUsersRepository',
      useClass: UsersRepository,
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
  ],
})
export class InfraModule {}
