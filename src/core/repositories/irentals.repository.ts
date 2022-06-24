import { CreateRentalInputModel } from '../dtos/rentals/createrental.inputmodel';
import { Rental } from '../entities/Rental';

export interface IRentalsRepository {
  create({ userId, gameId, expectedReturnDate, id, endDate, total }: CreateRentalInputModel): Promise<Rental>;
  findUnavailableGames(gameId: string): Promise<Rental>;
  findGameAlreadyRentByUser(userId: string): Promise<Rental>;
}
