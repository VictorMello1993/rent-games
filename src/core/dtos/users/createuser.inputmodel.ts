import { Equals, IsEmail, IsNotEmpty, Max, Min, NotEquals } from 'class-validator';

export class CreateUserInputModel {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  telephone: string;

  @IsNotEmpty()
  @Min(5)
  password: string;

  @IsNotEmpty()
  @Max(30)
  name: string;

  @IsNotEmpty()
  birthDate: Date;
}
