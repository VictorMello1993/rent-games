import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../../infra/repositories/users.repository';
import { ICreateUserDTO } from '../../presentation/users/dtos/create-user.dto';
import { UserViewModel } from '../../presentation/users/dtos/user-view-model';
import { generateHash } from '../../utils/helpers/auth.helpers';
import { convertToArray, convertToDateObject } from '../../utils/helpers/date.helpers';

@Injectable()
export class UsersService {
  constructor(private userRepository: UsersRepository) {}

  async create({ name, email, telephone, password, birthDate }: ICreateUserDTO): Promise<UserViewModel> {
    const dateArray = convertToArray(birthDate);
    const newBirthDate = convertToDateObject(dateArray);

    const hashedPassword = await generateHash(password);

    const newUser = await this.userRepository.create({
      name,
      email,
      telephone,
      password: hashedPassword,
      birthDate: newBirthDate,
    });

    return {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      telephone: newUser.telephone,
      birthDate: newUser.birthDate,
      admin: newUser.admin,
      createdAt: newUser.createdAt,
    };
  }
}
