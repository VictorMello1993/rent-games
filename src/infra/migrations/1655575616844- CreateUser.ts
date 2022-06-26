import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUser1655420942180 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'password',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'admin',
            type: 'boolean',
            default: false,
          },
          {
            name: 'createdat',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'telephone',
            type: 'varchar',
          },
          {
            name: 'birthdate',
            type: 'timestamp',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
