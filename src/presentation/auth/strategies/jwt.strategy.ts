import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ValidateUserUseCase } from '../../../core/useCases/users/validateuser.usecase';
import { ExtractJwt, Strategy } from 'passport-jwt';
import 'dotenv/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly _validateUserUseCase: ValidateUserUseCase) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET_KEY,
    });
  }

  async validate(payload: any) {
    const response = await this._validateUserUseCase.execute({
      login: payload.sub,
      name: payload.name,
      path: '',
    });

    return response;
  }
}
