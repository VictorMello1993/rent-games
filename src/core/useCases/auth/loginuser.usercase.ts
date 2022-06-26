import { Inject, Injectable } from '@nestjs/common';
import { AppError } from '../../../utils/errors/app.error';
import { validatePassword } from '../../../utils/helpers/auth.helpers';
import { LoginUserInputModel } from '../../dtos/auth/loginuser.inputmodel';
import { LoginUserViewModel } from '../../dtos/auth/loginuser.viewmodel';
import { IUsersRepository } from '../../repositories/iusers.repository';
import { IBaseUseCase } from '../base.usecase';

@Injectable()
export class LoginUserUseCase implements IBaseUseCase<LoginUserInputModel, Promise<LoginUserViewModel>> {
  constructor(
    @Inject('IUsersRepository')
    private readonly _usersRepository: IUsersRepository,
  ) {}
  async execute({ login, password }: LoginUserInputModel): Promise<LoginUserViewModel> {
    const user = await this._usersRepository.findByEmail(login);

    if (!user) {
      throw new AppError('Usuário ou senha inválido(s)');
    }

    const passwordMatch = await validatePassword(password, user.password);

    if (!passwordMatch) {
      throw new AppError('Usuário ou senha inválido(s)');
    }

    return {
      user: {
        login,
        name: user.name,
        type: 'user',
      },
    };
  }
}
