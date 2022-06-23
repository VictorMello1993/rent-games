import { CreateRentalInputModel } from '../dtos/rentals/createrental.inputmodel';
import { Rental } from '../entities/Rental';

export interface IRentalsRepository {
  create(data: CreateRentalInputModel): Promise<Rental>;
}
