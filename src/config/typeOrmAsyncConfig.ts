// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';

// export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
//   imports: [ConfigModule],
//   inject: [ConfigService],
//   useFactory: async (): Promise<TypeOrmModuleOptions> => {
//     return {
//       type: 'postgres',
//       host: 'localhost',
//       port: 5432,
//       username: 'victor',
//       password: 'nest123',
//       database: 'dev',
//       entities: [__dirname + '/../core/entities/*{.ts,.js}'],
//       migrations: [__dirname + '/../infra/migrations/*{.ts,.js}'],
//       cli: {
//         migrationsDir: __dirname + '/../database/migrations',
//       },
//       extra: {
//         charset: 'utf8mb4_unicode_ci',
//       },
//       synchronize: false,
//       logging: true,
//     };
//   },
// };

// export const typeOrmConfig: TypeOrmModuleOptions = {
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'victor',
//   password: 'nest123',
//   database: 'dev',
//   entities: [__dirname + '/../core/entities/*{.ts,.js}'],
//   migrations: [__dirname + '/../infra/migrations/*{.ts,.js}'],
//   cli: {
//     migrationsDir: __dirname + '/../database/migrations',
//   },
//   extra: {
//     charset: 'utf8mb4_unicode_ci',
//   },
//   synchronize: false,
//   logging: true,
// };
