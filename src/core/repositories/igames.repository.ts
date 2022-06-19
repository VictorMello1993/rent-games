import { ICreateGameInputModel } from '../dtos/games/create.game.input.model';
import { Game } from '../entities/Game';

export interface IGamesRepository {
  create(data: ICreateGameInputModel): Promise<Game>;
  listAll(): Promise<Game[]>;
  findByName(name: string): Promise<Game>;
}
