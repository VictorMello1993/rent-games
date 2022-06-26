import { MigrationInterface, QueryRunner } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { generateHash } from '../../utils/helpers/auth.helpers';
import { convertToArray, convertToDateObject } from '../../utils/helpers/date.helpers';

export class AdminSeeder1656265574838 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const id = uuidv4();
    const password = await generateHash('admin');

    await queryRunner.query(`INSERT INTO users (id, email, name, password, telephone, birthdate, createdat, admin)
                             VALUES ('${id}', 'admin@test.com', 'admin', '${password}', '(21) 0800-4444', 
                             '1989-01-01 00:00:00.636854', 'now()', true)`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM users WHERE admin = true');
  }
}
