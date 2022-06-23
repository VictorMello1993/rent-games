export class CreateRentalInputModel {
  userId: string;
  gameId: string;
  expectedReturnDate: Date;
  id?: string;
  endDate?: Date;
  total?: number;
}
