import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './core/entities/Game';
import { Rental } from './core/entities/Rental';
import { User } from './core/entities/User';
import { CreateUser1655420942180 } from './infra/migrations/1655575616844- CreateUser';
import { CreateGame1655584598158 } from './infra/migrations/1655599099856- CreateGame';
import { ModifyGenreColumn1655603593173 } from './infra/migrations/1655603593173- ModifyGenreColumn';
import { CreateRental1655947515544 } from './infra/migrations/1655947515544- CreateRental';
import { PresentationModule } from './presentation/presentation.module';

@Module({
  imports: [
    PresentationModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [User, Game, Rental],
      migrations: [
        CreateUser1655420942180,
        CreateGame1655584598158,
        ModifyGenreColumn1655603593173,
        CreateRental1655947515544,
      ],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  providers: [],
})
export class AppModule {}
