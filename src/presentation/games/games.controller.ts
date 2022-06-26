import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { CreateGameInputModel } from '../../core/dtos/games/creategame.inputmodel';
import { GameViewModel } from '../../core/dtos/games/game.viewmodel';
import { CreateGameUseCase } from '../../core/useCases/games/creategame.usecase';
import { ListAvailableGamesUseCase } from '../../core/useCases/games/list.availablegames.usecase';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';

@Controller('games')
export class GamesController {
  constructor(
    private readonly _createGameUseCase: CreateGameUseCase,
    private readonly _listAvailableGamesUseCase: ListAvailableGamesUseCase,
  ) {}

  @Post()
  create(
    @Body() { name, description, genre, releaseDate, dailyRate, fineAmount }: CreateGameInputModel,
  ): Promise<GameViewModel> {
    return this._createGameUseCase.execute({ name, description, genre, releaseDate, dailyRate, fineAmount });
  }

  @Get('available')
  findAll(): Promise<GameViewModel[]> {
    return this._listAvailableGamesUseCase.execute();
  }
}
