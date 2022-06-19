import { ICreateUserInputModel } from '../dtos/users/createuser.inputmodel';
import { User } from '../entities/User';

export interface IUsersRepository {
  create(data: ICreateUserInputModel): Promise<User>;
  findByEmail(email: string): Promise<User>;
}
