export interface ICreateGameDTO {
  name: string;
  description: string;
  idGenre: number;
  releaseDate: Date;
  dailyRate: number;
  fineAmount: number;
}
