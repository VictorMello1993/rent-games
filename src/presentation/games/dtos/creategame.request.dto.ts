import { Genre } from './../../../core/entities/Game';

export interface ICreateGameRequest {
  name: string;
  description: string;
  genre: Genre;
  releaseDate: Date;
  dailyRate: number;
  fineAmount: number;
}
