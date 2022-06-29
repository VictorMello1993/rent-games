import { IsEmail, IsNotEmpty, IsString, MaxLength, Validate } from 'class-validator';
import { ValidateTelephoneNumber } from '../../../config/schemas/validate-telephone';

export class CreateUserInputModel {
  @IsString({ message: 'E-mail deve ser uma string' })
  @IsEmail({}, { message: 'E-mail inválido' })
  @IsNotEmpty({ message: 'E-mail é obrigatório' })
  email: string;

  @IsString({ message: 'O telefone deve ser uma string' })
  @IsNotEmpty({ message: 'Telefone é obrigatório' })
  @Validate(ValidateTelephoneNumber)
  telephone: string;

  @IsString({ message: 'A senha deve ser uma string' })
  @IsNotEmpty({ message: 'Senha é obrigatória' })
  @MaxLength(5, { message: 'A senha não pode passar de 5 caracteres' })
  password: string;

  @IsString({ message: 'O nome deve ser uma string' })
  @MaxLength(30, { message: 'O nome não pode passar de 30 caracteres' })
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  name: string;

  @IsNotEmpty({ message: 'Data de nascimento é obrigatória' })
  @IsString({ message: 'Data de nascimento deve ser uma string' })
  birthDate: string;
}
