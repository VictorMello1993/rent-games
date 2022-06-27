import { Module } from '@nestjs/common';
import { InfraModule } from '../infra/infra.module';
import { ListAvailableGamesUseCase } from './useCases/games/list.availablegames.usecase';
import { JwtModule } from '@nestjs/jwt';
import { GenerateJwtUseCase } from './useCases/auth/generatejwt.usecase';
import { LoginUserUseCase } from './useCases/auth/loginuser.usercase';
import { ValidateUserUseCase } from './useCases/users/validate-user.usecase';
import { CreateUserUseCase } from './useCases/users/create-user.usecase';
import 'dotenv/config';
import { CreateRentalUseCase } from './useCases/rentals/create-rental.usecase';
import { CreateGameUseCase } from './useCases/games/create-game.usecase';
import { DevolutionUseCase } from './useCases/rentals/devolution.usecase';

@Module({
  imports: [
    InfraModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '4h' },
    }),
  ],
  providers: [
    CreateUserUseCase,
    CreateGameUseCase,
    ListAvailableGamesUseCase,
    CreateRentalUseCase,
    GenerateJwtUseCase,
    LoginUserUseCase,
    ValidateUserUseCase,
    DevolutionUseCase,
  ],
  exports: [
    CreateUserUseCase,
    CreateGameUseCase,
    ListAvailableGamesUseCase,
    CreateRentalUseCase,
    GenerateJwtUseCase,
    LoginUserUseCase,
    ValidateUserUseCase,
    DevolutionUseCase,
  ],
})
export class CoreModule {}
