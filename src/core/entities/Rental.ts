import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { Game } from './Game';
import { v4 as uuidv4 } from 'uuid';
import { User } from './User';

@Entity('rentals')
class Rental {
  @PrimaryColumn()
  id: string;

  @Column()
  expectedReturnDate: Date;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  total: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  userId: string;

  @Column()
  gameId: string;

  @ManyToOne(() => Game)
  @JoinColumn({ name: 'gameId' })
  game: Game;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
export { Rental };
