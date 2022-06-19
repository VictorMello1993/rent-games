import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

export enum Genre {
  ACTION = 'Ação',
  ADVENTURE = 'Aventura',
  FPS = 'Tiro em primeira pessoa',
  PUZZLE = 'Quebra-cabeça',
  BOARD_GAME = 'Jogo de tabuleiro',
  RPG = 'RPG',
  STRATEGY = 'Estratégia',
  FIGHT = 'Luta',
  SPORTS = 'Esportes',
  INDIE = 'Indie',
  HORROR_GAME = 'Terror',
}

@Entity('games')
class Game {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ type: 'enum', enum: Genre })
  genre: Genre;

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
