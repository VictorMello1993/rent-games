import { Module } from '@nestjs/common';
import { UsersService } from '../core/services/users.service';
import { UsersController } from './users/users.controller';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService],
})
export class PresentationModule {}
