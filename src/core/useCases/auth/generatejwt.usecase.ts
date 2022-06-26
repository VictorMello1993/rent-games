import { Injectable } from '@nestjs/common';
import { GenerateJwtInputModel } from '../../dtos/auth/generatejwt.inputmodel';
import { GenerateJwtViewModel } from '../../dtos/auth/generatejwtviewmodel';
import { IBaseUseCase } from '../base.usecase';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class GenerateJwtUseCase implements IBaseUseCase<GenerateJwtInputModel, Promise<GenerateJwtViewModel>> {
  constructor(private readonly _jwtService: JwtService) {}
  async execute({ user }: GenerateJwtInputModel): Promise<GenerateJwtViewModel> {
    const payload = {
      sub: user.login,
      name: user.name,
      type: user.type,
    };

    return {
      token: this._jwtService.sign(payload),
      type: 'Bearer',
    };
  }
}
