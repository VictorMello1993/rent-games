import { Genre } from './../../core/entities/Game';
import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class ModifyGenreColumn1655603593173 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'games',
      'idGenre',
      new TableColumn({
        name: 'genre',
        type: 'enum',
        enum: [
          Genre.ACTION,
          Genre.ADVENTURE,
          Genre.BOARD_GAME,
          Genre.FIGHT,
          Genre.FPS,
          Genre.HORROR_GAME,
          Genre.INDIE,
          Genre.PUZZLE,
          Genre.RPG,
          Genre.SPORTS,
          Genre.STRATEGY,
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'statements',
      'genre',
      new TableColumn({
        name: 'idGenre',
        type: 'numeric',
      }),
    );
  }
}
