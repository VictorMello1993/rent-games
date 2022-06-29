import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
import { Genre } from '../../entities/Game';

export class CreateGameInputModel {
  @IsString({ message: 'O nome deve ser uma string' })
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  @MaxLength(30, { message: 'O nome não pode passar de 30 caracteres' })
  name: string;

  @IsString({ message: 'A descrição deve ser uma string' })
  @IsNotEmpty({ message: 'A descrição é obrigatória ' })
  @MaxLength(50, { message: 'A descrição não pode passar de 50 caracteres' })
  description: string;

  @IsString({ message: 'O gênero deve ser uma string' })
  @IsNotEmpty({ message: 'O gênero é obrigatório' })
  genre: Genre;

  @IsString({ message: 'Data de lançamento de ser uma string no formato "DD/MM/YYYY"' })
  @IsNotEmpty({ message: 'Data de lançamento é obrigatória' })
  releaseDate: string;

  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'O valor da diária deve ser numérico' })
  @IsNotEmpty({ message: 'O valor da diária é obrigatório' })
  dailyRate: number;

  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'O valor da multa deve ser numérico' })
  @IsNotEmpty({ message: 'O valor da multa é obrigatório' })
  fineAmount: number;
}
