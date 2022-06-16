import { Module } from '@nestjs/common';
import { CoreModule } from '../core/core.module';
import { UsersController } from './users/users.controller';

@Module({
  imports: [CoreModule],
  controllers: [UsersController],
  providers: [],
})
export class PresentationModule {}
