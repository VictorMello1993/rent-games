import { Genre } from '../../entities/Game';

export interface ICreateGameInputModel {
  name: string;
  description: string;
  genre: Genre;
  releaseDate: Date;
  dailyRate: number;
  fineAmount: number;
}
