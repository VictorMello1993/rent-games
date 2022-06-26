import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { BasicStrategy as Strategy } from 'passport-http';
import { LoginUserViewModel } from '../../../core/dtos/auth/loginuser.viewmodel';
import { LoginUserUseCase } from '../../../core/useCases/auth/loginuser.usercase';
import { AppError } from '../../../utils/errors/app.error';

@Injectable()
export class BasicStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly _loginUserUseCase: LoginUserUseCase) {
    super();
  }

  async validate(login: string, password: string): Promise<LoginUserViewModel> {
    const result = await this._loginUserUseCase.execute({ login, password });

    if (!result.user) {
      throw new AppError('Usuário não autorizado', 401);
    }

    return result;
  }
}
