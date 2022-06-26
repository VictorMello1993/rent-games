import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { CreateGameInputModel } from '../../core/dtos/games/create-game.inputmodel';
import { GameViewModel } from '../../core/dtos/games/game.viewmodel';
import { CreateGameUseCase } from '../../core/useCases/games/create-game.usecase';
import { ListAvailableGamesUseCase } from '../../core/useCases/games/list.availablegames.usecase';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/roles/roles.decorator';
import { Role } from '../auth/roles/roles.enum';

@Controller('games')
export class GamesController {
  constructor(
    private readonly _createGameUseCase: CreateGameUseCase,
    private readonly _listAvailableGamesUseCase: ListAvailableGamesUseCase,
  ) {}

  @Post()
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  create(@Body() request: CreateGameInputModel): Promise<GameViewModel> {
    return this._createGameUseCase.execute(request);
  }

  @Get('available')
  findAll(): Promise<GameViewModel[]> {
    return this._listAvailableGamesUseCase.execute();
  }
}
