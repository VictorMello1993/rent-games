import { CreateRentalInputModel } from '../dtos/rentals/create-rental.inputmodel';
import { Rental } from '../entities/Rental';

export interface IRentalsRepository {
  create(data: CreateRentalInputModel): Promise<Rental>;
  findUnavailableGame(gameId: string): Promise<Rental>;
  findGameAlreadyRentByUser(userId: string): Promise<Rental>;
  findById(id: string): Promise<Rental>;
}
