import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './core/entities/User';
import { PresentationModule } from './presentation/presentation.module';

@Module({
  imports: [
    PresentationModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'victor',
      password: 'nest123',
      database: 'dev',
      entities: [User],
      migrations: ['src/infra/migrations/*.ts'],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
