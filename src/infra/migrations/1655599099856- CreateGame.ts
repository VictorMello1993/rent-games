import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateGame1655584598158 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'games',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'idGenre',
            type: 'numeric',
          },
          {
            name: 'releaseDate',
            type: 'timestamp',
          },
          {
            name: 'dailyRate',
            type: 'numeric',
          },
          {
            name: 'fineAmount',
            type: 'numeric',
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'available',
            type: 'boolean',
            default: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('games');
  }
}
