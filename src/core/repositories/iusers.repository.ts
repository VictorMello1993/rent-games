import { CreateUserInputModel } from '../dtos/users/create-user.inputmodel';
import { User } from '../entities/User';

export interface IUsersRepository {
  create(data: CreateUserInputModel): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findByName(name: string): Promise<User>;
}
