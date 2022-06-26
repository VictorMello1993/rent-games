import { Genre } from './../../../core/entities/Game';

export interface ICreateGameRequest {
  name: string;
  description: string;
  genre: Genre;
  releaseDate: string;
  dailyRate: number;
  fineAmount: number;
}
