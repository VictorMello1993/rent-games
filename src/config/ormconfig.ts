import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'victor',
  password: 'nest123',
  database: 'dev',
  migrations: [__dirname + '/../infra/migrations/*{.ts,.js}'],
  entities: [__dirname + '/../core/entities/*{.ts,.js}'],
  synchronize: true,
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
