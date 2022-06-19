import { Controller, Get, Post, Body } from '@nestjs/common';
import { GameViewModel } from '../../core/dtos/games/game.viewmodel';
import { CreateGameUseCase } from '../../core/useCases/games/creategame.usecase';
import { ListAvailableGamesUseCase } from '../../core/useCases/games/list.availablegames.usecase';
import { ICreateGameRequest } from './dtos/creategame.request.dto';

@Controller('games')
export class GamesController {
  constructor(
    private readonly _createGameUseCase: CreateGameUseCase,
    private readonly _listAvailableGamesUseCase: ListAvailableGamesUseCase,
  ) {}

  @Post()
  create(@Body() request: ICreateGameRequest): Promise<GameViewModel> {
    return this._createGameUseCase.execute(request);
  }

  @Get('available')
  findAll(): Promise<GameViewModel[]> {
    return this._listAvailableGamesUseCase.execute();
  }
}
