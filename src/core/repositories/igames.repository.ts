import { CreateGameInputModel } from '../dtos/games/create-game.inputmodel';
import { Game } from '../entities/Game';

export interface IGamesRepository {
  create(data: CreateGameInputModel): Promise<Game>;
  listAll(): Promise<Game[]>;
  findByName(name: string): Promise<Game>;
  updateAvailable(id: string, available: boolean): Promise<void>;
  findById(id: string): Promise<Game>;
}
