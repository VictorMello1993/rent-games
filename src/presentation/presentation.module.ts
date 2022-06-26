import { Module } from '@nestjs/common';
import { CoreModule } from '../core/core.module';
import { AuthController } from './auth/auth.controller';
import { BasicStrategy } from './auth/strategies/basic.strategy';
import { JwtStrategy } from './auth/strategies/jwt.strategy';
import { GamesController } from './games/games.controller';
import { RentalsController } from './rentals/rentals.controller';
import { UsersController } from './users/users.controller';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [CoreModule, PassportModule],
  providers: [BasicStrategy, JwtStrategy],
  controllers: [UsersController, GamesController, RentalsController, AuthController],
})
export class PresentationModule {}
