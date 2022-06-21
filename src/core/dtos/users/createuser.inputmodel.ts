import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateUserInputModel {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  telephone: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(5)
  password: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsString()
  birthDate: Date;
}
