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
  startdate: Date;

  @Column()
  enddate: Date;

  @Column()
  total: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  userid: string;

  @Column()
  gameid: string;

  @ManyToOne(() => Game)
  @JoinColumn({ name: 'gameid' })
  game: Game;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userid' })
  user: User;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
      this.startdate = new Date();
    }
  }
}
export { Rental };
