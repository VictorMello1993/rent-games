import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateDevolutionInputModel {
  @IsUUID('4', { message: 'O id do usuário deve ser do tipo uuid versão 4' })
  @IsNotEmpty({ message: 'Id do usuário é obrigatório' })
  userId: string;

  @IsUUID('4', { message: 'O id do game deve ser do tipo uuid versão 4' })
  @IsNotEmpty({ message: 'Id do game é obrigatório' })
  rentalId: string;
}
