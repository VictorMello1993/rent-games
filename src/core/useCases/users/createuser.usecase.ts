import { Injectable } from '@nestjs/common';
import { AppError } from '../../../utils/errors/app.error';
import { generateHash } from '../../../utils/helpers/auth.helpers';
import { convertToArray, convertToDateObject } from '../../../utils/helpers/date.helpers';
import { ICreateUserInputModel } from '../../dtos/users/createuser.inputmodel';
import { UserViewModel } from '../../dtos/users/user.viewmodel';
import { IUsersRepository } from '../../repositories/iusers.repository';
import { IBaseUseCase } from '../base.usecase';

@Injectable()
export class CreateUserUseCase implements IBaseUseCase<ICreateUserInputModel, Promise<UserViewModel>> {
  constructor(private readonly _usersRepository: IUsersRepository) {}

  async execute({ name, email, telephone, password, birthDate }: ICreateUserInputModel): Promise<UserViewModel> {
    const dateArray = convertToArray(birthDate);
    const newBirthDate = convertToDateObject(dateArray);

    const hashedPassword = await generateHash(password);

    const user = await this._usersRepository.findByEmail(email);

    if (user) {
      throw new AppError('Usuário já existe com e-mail, informado');
    }

    const newUser = await this._usersRepository.create({
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
