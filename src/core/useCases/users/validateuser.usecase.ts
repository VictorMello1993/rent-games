import { Inject } from '@nestjs/common';
import { AppError } from '../../../utils/errors/app.error';
import { ValidateUserInputModel } from '../../dtos/users/validateuser.inputmodel';
import { ValidateUserViewModel } from '../../dtos/users/validateuser.viewmode';
import { IUsersRepository } from '../../repositories/iusers.repository';
import { IBaseUseCase } from '../base.usecase';

export class ValidateUserUseCase implements IBaseUseCase<ValidateUserInputModel, Promise<ValidateUserViewModel>> {
  constructor(
    @Inject('IUsersRepository')
    private readonly _usersRepository: IUsersRepository,
  ) {}
  async execute({ login, name }: ValidateUserInputModel): Promise<ValidateUserViewModel> {
    const user = await this._usersRepository.findByEmail(login);

    if (!user) {
      throw new AppError('Usuário não está permitido a realizar esta operação', 403);
    }

    return {
      user: {
        login,
        name,
        type: 'user',
      },
    };
  }
}
