import { Module } from '@nestjs/common';
import { InfraModule } from '../infra/infra.module';
import { CreateGameUseCase } from './useCases/games/creategame.usecase';
import { ListAvailableGamesUseCase } from './useCases/games/list.availablegames.usecase';
import { CreateRentalUseCase } from './useCases/rentals/createrental.usecase';
import { CreateUserUseCase } from './useCases/users/createuser.usecase';
import { JwtModule } from '@nestjs/jwt';
import { GenerateJwtUseCase } from './useCases/auth/generatejwt.usecase';
import { LoginUserUseCase } from './useCases/auth/loginuser.usercase';
import 'dotenv/config';

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
  ],
  exports: [
    CreateUserUseCase,
    CreateGameUseCase,
    ListAvailableGamesUseCase,
    CreateRentalUseCase,
    GenerateJwtUseCase,
    LoginUserUseCase,
  ],
})
export class CoreModule {}
