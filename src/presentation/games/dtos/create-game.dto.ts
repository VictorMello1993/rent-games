import { Genre } from './../../../core/entities/Game';

export interface ICreateGameDTO {
  name: string;
  description: string;
  genre: Genre;
  releaseDate: Date;
  dailyRate: number;
  fineAmount: number;
}
