import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('users')
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  admin: boolean;

  @CreateDateColumn()
  createdat: Date;

  @Column()
  telephone: string;

  @Column()
  birthdate: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
      this.admin = false;
    }
  }
}

export { User };
