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

  async create({ userId, gameId, expectedReturnDate }: CreateRentalInputModel): Promise<Rental> {
    const rental = this.rentalsRepository.create({
      userId,
      gameId,
      expectedReturnDate,
    });

    await this.rentalsRepository.save(rental);

    return rental;
  }

  async findUnavailableGames(gameId: string): Promise<Rental> {
    return this.rentalsRepository.findOne({
      where: {
        gameId,
        endDate: null,
      },
    });
  }

  async findGameAlreadyRentByUser(userId: string): Promise<Rental> {
    return this.rentalsRepository.findOne({
      where: {
        userId,
        endDate: null,
      },
    });
  }
}
