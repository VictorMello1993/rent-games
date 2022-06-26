import { CreateGameInputModel } from '../dtos/games/creategame.inputmodel';
import { Game } from '../entities/Game';

export interface IGamesRepository {
  create(data: CreateGameInputModel): Promise<Game>;
  listAll(): Promise<Game[]>;
  findByName(name: string): Promise<Game>;
  updateAvailable(gameId: string, available: boolean): Promise<void>;
}
