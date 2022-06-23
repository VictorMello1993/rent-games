import { Module } from '@nestjs/common';
import { InfraModule } from '../infra/infra.module';
import { CreateGameUseCase } from './useCases/games/creategame.usecase';
import { ListAvailableGamesUseCase } from './useCases/games/list.availablegames.usecase';
import { CreateRentalUseCase } from './useCases/rentals/createrental.usecase';
import { CreateUserUseCase } from './useCases/users/createuser.usecase';

@Module({
  imports: [InfraModule],
  providers: [CreateUserUseCase, CreateGameUseCase, ListAvailableGamesUseCase, CreateRentalUseCase],
  exports: [CreateUserUseCase, CreateGameUseCase, ListAvailableGamesUseCase, CreateRentalUseCase],
})
export class CoreModule {}
