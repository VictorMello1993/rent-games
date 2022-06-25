import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class undefinedodifyEndDateColumnRentals1656200972639 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'rentals',
      'endDate',
      new TableColumn({
        name: 'endDate',
        type: 'timestamp',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'rentals',
      'endDate',
      new TableColumn({
        name: 'endDate',
        type: 'timestamp',
        isNullable: false,
      }),
    );
  }
}
