import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { InfraModule } from './infra/infra.module';
import { PresentationModule } from './presentation/presentation.module';
import { AppController } from './presentation/users/http/app/app.controller';

@Module({
  imports: [PresentationModule, InfraModule, CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
