import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';

@Module({
  imports: [],
  controllers: [],
  providers: [UsersService],
})
export class CoreModule {}
