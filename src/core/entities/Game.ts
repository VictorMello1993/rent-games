import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('games')
class Game {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  idGenre: number;

  @Column()
  releaseDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  available: boolean;

  @Column()
  dailyRate: number;

  @Column()
  fineAmount: number;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
      this.available = true;
    }
  }
}

export { Game };
