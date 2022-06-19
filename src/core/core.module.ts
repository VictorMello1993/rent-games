import { Module } from '@nestjs/common';
import { InfraModule } from '../infra/infra.module';
import { GamesService } from './services/games.service';
import { UsersService } from './services/users.service';

@Module({
  imports: [InfraModule],
  controllers: [],
  providers: [UsersService, GamesService],
  exports: [UsersService, GamesService],
})
export class CoreModule {}
