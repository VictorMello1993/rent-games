import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../core/entities/User';
import { IUsersRepository } from '../../core/repositories/iusers.repository';
import { ICreateUserDTO } from '../../presentation/users/dtos/create-user.dto';

@Injectable()
export class UsersRepository implements IUsersRepository {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async create({ name, email, telephone, password, birthDate }: ICreateUserDTO) {
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
}
