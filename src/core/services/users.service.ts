import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ICreateUserDTO } from '../../presentation/users/dtos/create-user.dto';
import { User } from '../entities/User';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async create({ name, email, telephone, password }: ICreateUserDTO): Promise<void> {
    this.userRepository.create({ name, email, telephone, password });
  }
}
