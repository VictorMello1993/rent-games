import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../../infra/repositories/users.repository';
import { ICreateUserDTO } from '../../presentation/users/dtos/create-user.dto';
import { convertToArray, convertToDateObject } from '../../utils/helpers/DateHelpers';
import { User } from '../entities/User';

@Injectable()
export class UsersService {
  constructor(private userRepository: UsersRepository) {}

  async create({ name, email, telephone, password, birthDate }: ICreateUserDTO): Promise<User> {
    const dateArray = convertToArray(birthDate);
    const newBirthDate = convertToDateObject(dateArray);

    const user = await this.userRepository.create({
      name,
      email,
      telephone,
      password,
      birthDate: newBirthDate,
    });
    return user;
  }
}
