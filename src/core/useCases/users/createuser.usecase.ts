import { Inject, Injectable } from '@nestjs/common';
import { AppError } from '../../../utils/errors/app.error';
import { generateHash } from '../../../utils/helpers/auth.helpers';
import { convertToArray, convertToDateObject } from '../../../utils/helpers/date.helpers';
import { CreateUserInputModel } from '../../dtos/users/createuser.inputmodel';
import { UserViewModel } from '../../dtos/users/user.viewmodel';
import { IUsersRepository } from '../../repositories/iusers.repository';
import { IBaseUseCase } from '../base.usecase';

@Injectable()
export class CreateUserUseCase implements IBaseUseCase<CreateUserInputModel, Promise<UserViewModel>> {
  constructor(
    @Inject('IUsersRepository')
    private readonly _usersRepository: IUsersRepository,
  ) {}

  async execute({ name, email, telephone, password, birthDate }: CreateUserInputModel): Promise<UserViewModel> {
    const hashedPassword = await generateHash(password);

    const user = await this._usersRepository.findByEmail(email);

    if (user) {
      throw new AppError('Usuário já existe com e-mail informado');
    }

    const newUser = await this._usersRepository.create({
      name,
      email,
      telephone,
      password: hashedPassword,
      birthDate,
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
