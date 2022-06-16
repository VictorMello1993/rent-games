import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../../infra/repositories/users.repository';
import { ICreateUserDTO } from '../../presentation/users/dtos/create-user.dto';
import { User } from '../entities/User';

@Injectable()
export class UsersService {
  constructor(private userRepository: UsersRepository) {}

  async create({ name, email, telephone, password }: ICreateUserDTO): Promise<User> {
    const user = await this.userRepository.create({ name, email, telephone, password });
    return user;
  }
}
