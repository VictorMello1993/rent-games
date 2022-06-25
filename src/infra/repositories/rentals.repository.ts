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

  async create(data: CreateRentalInputModel): Promise<Rental> {
    console.log(data);

    const rental = this.rentalsRepository.create({
      userId: data.userId,
      gameId: data.gameId,
      expectedReturnDate: new Date(data.expectedReturnDate),
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
