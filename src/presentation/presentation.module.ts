import { Module } from '@nestjs/common';
import { CoreModule } from '../core/core.module';
import { GamesController } from './games/games.controller';
import { UsersController } from './users/users.controller';

@Module({
  imports: [CoreModule],
  controllers: [UsersController, GamesController],
})
export class PresentationModule {}
