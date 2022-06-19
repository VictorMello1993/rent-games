import { ICreateGameDTO } from '../../presentation/games/dtos/create-game.dto';
import { Game } from '../entities/Game';

export interface IGamesRepository {
  create(data: ICreateGameDTO): Promise<Game>;
}
