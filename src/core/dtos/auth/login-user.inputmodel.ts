import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class LoginUserInputModel {
  @IsString({ message: 'O login deve ser uma string' })
  @IsNotEmpty({ message: 'Login é obrigatório' })
  login: string;

  @IsString({ message: 'O senha deve ser uma string' })
  @IsNotEmpty({ message: 'Senha é obrigatória' })
  @MaxLength(5, { message: 'A senha não pode passar de 5 caracteres' })
  password: string;
}
