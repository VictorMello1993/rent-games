import { IsDate, IsDateString, IsISO8601, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateRentalInputModel {
  @IsUUID()
  gameId: string;
  @IsUUID()
  userId: string;

  @IsString()
  expectedReturnDate: string;
  // id?: string;
  // endDate?: Date;
  // total?: number;
  // startDate?: Date;
}
