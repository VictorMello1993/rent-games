import { ICreateUserDTO } from '../../presentation/users/dtos/create-user.dto';
import { User } from '../entities/User';

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
}
