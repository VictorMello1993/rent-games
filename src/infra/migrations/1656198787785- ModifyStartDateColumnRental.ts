import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class ModifyStartDateColumnRental1656198787785 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'rentals',
      'startDate',
      new TableColumn({
        name: 'startDate',
        type: 'timestamp',
        default: 'now()',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'rentals',
      'startDate',
      new TableColumn({
        name: 'startDate',
        type: 'timestamp',
      }),
    );
  }
}
