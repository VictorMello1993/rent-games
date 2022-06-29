import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateRentalInputModel {
  @IsUUID('4', { message: 'O id do game deve ser do tipo uuid versão 4' })
  @IsNotEmpty({ message: 'Id do game é obrigatório' })
  gameId: string;

  userId: string;

  @IsString({ message: 'A data de previsão de devolução deve ser uma string' })
  @IsNotEmpty({ message: 'A data de previsão de devolução é obrigatória' })
  expectedReturnDate: string;

  id?: string;
  endDate?: Date;
  total?: number;
}
