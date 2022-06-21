import { CreateUserInputModel } from '../dtos/users/createuser.inputmodel';
import { User } from '../entities/User';

export interface IUsersRepository {
  create(data: CreateUserInputModel): Promise<User>;
  findByEmail(email: string): Promise<User>;
}
