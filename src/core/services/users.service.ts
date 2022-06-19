import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../../infra/repositories/users.repository';
import { AppError } from '../../utils/errors/app.error';
import { generateHash } from '../../utils/helpers/auth.helpers';
import { convertToArray, convertToDateObject } from '../../utils/helpers/date.helpers';
import { ICreateUserInputModel } from '../dtos/users/dtos/create.user.input.model';
import { UserViewModel } from '../dtos/users/dtos/user.view.model';

@Injectable()
export class UsersService {
  constructor(private userRepository: UsersRepository) {}

  async create({ name, email, telephone, password, birthDate }: ICreateUserInputModel): Promise<UserViewModel> {
    const dateArray = convertToArray(birthDate);
    const newBirthDate = convertToDateObject(dateArray);

    const hashedPassword = await generateHash(password);

    const user = await this.userRepository.findByEmail(email);

    if (user) {
      throw new AppError('Usuário já existe com e-mail, informado');
    }

    const newUser = await this.userRepository.create({
      name,
      email,
      telephone,
      password: hashedPassword,
      birthDate: newBirthDate,
    });

    return {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      telephone: newUser.telephone,
      birthDate: newUser.birthDate,
      admin: newUser.admin,
      createdAt: newUser.createdAt,
    };
  }
}
