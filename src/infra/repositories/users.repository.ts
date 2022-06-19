import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ICreateUserInputModel } from '../../core/dtos/users/dtos/create.user.input.model';
import { User } from '../../core/entities/User';
import { IUsersRepository } from '../../core/repositories/iusers.repository';

@Injectable()
export class UsersRepository implements IUsersRepository {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create({ name, email, telephone, password, birthDate }: ICreateUserInputModel) {
    const newUser = this.usersRepository.create({
      name,
      email,
      telephone,
      password,
      birthDate,
    });

    await this.usersRepository.save(newUser);

    return newUser;
  }

  async findByEmail(email: string): Promise<User> {
    return await this.usersRepository.findOne({
      where: {
        email,
      },
    });
  }
}
