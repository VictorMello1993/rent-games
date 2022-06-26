import { DataSource } from 'typeorm';
import 'dotenv/config';
import { ModifyGenreColumn1655603593173 } from '../infra/migrations/1655603593173- ModifyGenreColumn';
import { CreateGame1655584598158 } from '../infra/migrations/1655599099856- CreateGame';
import { CreateUser1655420942180 } from '../infra/migrations/1655575616844- CreateUser';
import { Game } from '../core/entities/Game';
import { User } from '../core/entities/User';
import { CreateRental1655947515544 } from '../infra/migrations/1655947515544- CreateRental';
import { Rental } from '../core/entities/Rental';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  migrations: [
    CreateUser1655420942180,
    CreateGame1655584598158,
    ModifyGenreColumn1655603593173,
    CreateRental1655947515544,
  ],
  entities: [User, Game, Rental],
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
