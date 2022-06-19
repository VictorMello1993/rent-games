import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GamesService } from '../../core/services/games.service';
import { ICreateGameDTO } from './dtos/create-game.dto';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Post()
  create(@Body() createGameDto: ICreateGameDTO) {
    return this.gamesService.create(createGameDto);
  }

  @Get('available')
  findAll() {
    return this.gamesService.findAll();
  }
}
