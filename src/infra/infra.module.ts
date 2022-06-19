import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from '../core/entities/Game';
import { User } from '../core/entities/User';
import { GamesRepository } from './repositories/games.repository';
import { UsersRepository } from './repositories/users.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User, Game])],
  providers: [UsersRepository, GamesRepository],
  exports: [UsersRepository, GamesRepository],
})
export class InfraModule {}
