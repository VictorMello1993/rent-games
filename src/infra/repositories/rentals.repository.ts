import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRentalInputModel } from '../../core/dtos/rentals/createrental.inputmodel';
import { Rental } from '../../core/entities/Rental';
import { IRentalsRepository } from '../../core/repositories/irentals.repository';

export class RentalsRepository implements IRentalsRepository {
  constructor(
    @InjectRepository(Rental)
    private rentalsRepository: Repository<Rental>,
  ) {}
  async create({ userId, gameId, expectedReturnDate, endDate, total }: CreateRentalInputModel): Promise<Rental> {
    const rental = this.rentalsRepository.create({
      userId,
      gameId,
      expectedReturnDate,
      endDate,
      total,
    });

    await this.rentalsRepository.save(rental);

    return rental;
  }
}
