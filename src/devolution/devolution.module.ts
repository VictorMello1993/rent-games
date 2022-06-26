import { Module } from '@nestjs/common';
import { DevolutionService } from './devolution.service';
import { DevolutionController } from './devolution.controller';

@Module({
  controllers: [DevolutionController],
  providers: [DevolutionService]
})
export class DevolutionModule {}
