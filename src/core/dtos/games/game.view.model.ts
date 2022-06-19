import { Genre } from '../../../core/entities/Game';

export class GameViewModel {
  id: string;
  name: string;
  description: string;
  genre: Genre;
  releaseDate: Date;
  dailyRate: number;
  fineAmount: number;
}
