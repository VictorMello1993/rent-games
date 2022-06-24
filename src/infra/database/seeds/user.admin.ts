import { Connection, getManager } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export class UserAdminSeed implements Seeder {
  async run(factory: Factory, connection: Connection): Promise<void> {
    await getManager().query('');
  }
}
