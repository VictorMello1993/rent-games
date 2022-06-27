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
  findUnavailableGames(gameId: string): Promise<Rental> {
    throw new Error('Method not implemented.');
  }

  async create({ userId, gameId, expectedReturnDate, id, endDate, total }: CreateRentalInputModel): Promise<Rental> {
    const rental = this.rentalsRepository.create({
      userId,
      gameId,
      expectedReturnDate: new Date(expectedReturnDate),
      id,
      endDate,
      total,
    });

    await this.rentalsRepository.save(rental);

    return rental;
  }

  async findUnavailableGame(gameId: string): Promise<Rental[]> | undefined {
    // const rental = await this.rentalsRepository.findOne({
    //   where: {
    //     gameId,
    //     endDate: null,
    //   },
    // });

    const rental = await this.rentalsRepository.query(
      `SELECT * FROM rentals 
        WHERE gameId = ${1} AND endDate IS NULL`,
      [gameId],
    );

    return rental;
  }

  async findGameAlreadyRentByUser(userId: string): Promise<Rental> {
    return this.rentalsRepository.findOne({
      where: {
        userId,
        endDate: null,
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
