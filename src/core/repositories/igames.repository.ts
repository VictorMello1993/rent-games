import { ICreateGameInputModel } from '../dtos/games/creategame.inputmodel';
import { Game } from '../entities/Game';

export interface IGamesRepository {
  create(data: ICreateGameInputModel): Promise<Game>;
  listAll(): Promise<Game[]>;
  findByName(name: string): Promise<Game>;
}
