import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GamesService } from '../../core/services/games.service';
import { IRequest } from './dtos/create.game.request.dto';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Post()
  create(@Body() request: IRequest) {
    return this.gamesService.create(request);
  }

  @Get('available')
  findAll() {
    return this.gamesService.findAll();
  }
}
