import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRentalInputModel } from '../../core/dtos/rentals/create-rental.inputmodel';
import { Rental } from '../../core/entities/Rental';
import { IRentalsRepository } from '../../core/repositories/irentals.repository';

export class RentalsRepository implements IRentalsRepository {
  constructor(
    @InjectRepository(Rental)
    private rentalsRepository: Repository<Rental>,
  ) {}
  async create({ userId, gameId, expectedReturnDate, id, endDate, total }: CreateRentalInputModel): Promise<Rental> {
    const rental = this.rentalsRepository.create({
      userid: userId,
      gameid: gameId,
      expectedReturnDate: new Date(expectedReturnDate),
      id,
      enddate: endDate,
      total,
    });

    await this.rentalsRepository.save(rental);

    return rental;
  }

  async findUnavailableGame(gameId: string): Promise<Rental> {
    const rental = await this.rentalsRepository.findOne({
      where: {
        gameid: gameId,
        enddate: null,
      },
      relations: ['game'],
    });

    return rental;
  }

  async findGameAlreadyRentByUser(userId: string): Promise<Rental> {
    return this.rentalsRepository.findOne({
      where: {
        userid: userId,
        enddate: null,
      },
    });
  }

  async findById(id: string): Promise<Rental> {
    return this.rentalsRepository.findOne({
      where: {
        id,
      },
    });
  }
}
