import { Module } from '@nestjs/common';
import { InfraModule } from '../infra/infra.module';
import { UsersService } from './services/users.service';

@Module({
  imports: [InfraModule],
  controllers: [],
  providers: [UsersService],
  exports: [UsersService],
})
export class CoreModule {}
