import { Module } from '@nestjs/common';
import { InfraModule } from '../infra/infra.module';
import { CreateGameUseCase } from './useCases/games/creategame.usecase';
import { ListAvailableGamesUseCase } from './useCases/games/list.availablegames.usecase';
import { CreateUserUseCase } from './useCases/users/createuser.usecase';

@Module({
  imports: [InfraModule],
  providers: [CreateUserUseCase, CreateGameUseCase, ListAvailableGamesUseCase],
  exports: [CreateUserUseCase, CreateGameUseCase, ListAvailableGamesUseCase],
})
export class CoreModule {}
