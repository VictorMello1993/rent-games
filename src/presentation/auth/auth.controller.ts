import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { GenerateJwtUseCase } from '../../core/useCases/auth/generatejwt.usecase';
import { LoginResponseDto } from './auth.dto';
import { BasicAuthGuard } from './guards/basic.guard';

@Controller('users')
export class AuthController {
  constructor(private readonly _generateJwtUseCase: GenerateJwtUseCase) {}

  @Post('login')
  @UseGuards(BasicAuthGuard)
  async login(@Request() req): Promise<LoginResponseDto> {
    return this._generateJwtUseCase.execute(req.user);
  }
}
