import { IsDate, isDateString, IsDateString, IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
import { Genre } from '../../entities/Game';

export class CreateGameInputModel {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  description: string;

  @IsNotEmpty()
  genre: Genre;

  @IsString()
  @IsNotEmpty()
  releaseDate: string;

  @IsNumber()
  @IsNotEmpty()
  dailyRate: number;

  @IsNumber()
  @IsNotEmpty()
  fineAmount: number;
}
