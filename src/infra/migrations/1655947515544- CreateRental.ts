import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateRental1655947515544 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'rentals',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'gameid',
            type: 'uuid',
          },
          {
            name: 'userid',
            type: 'uuid',
          },
          {
            name: 'startdate',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'enddate',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'expectedReturnDate',
            type: 'timestamp',
          },
          {
            name: 'total',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'FKGameRental',
            referencedTableName: 'games',
            referencedColumnNames: ['id'],
            columnNames: ['gameid'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
          {
            name: 'FKUserRental',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['userid'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('rentals');
  }
}
