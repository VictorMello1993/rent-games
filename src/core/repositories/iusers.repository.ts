import { ICreateUserInputModel } from '../dtos/users/dtos/create.user.input.model';
import { User } from '../entities/User';

export interface IUsersRepository {
  create(data: ICreateUserInputModel): Promise<User>;
  findByEmail(email: string): Promise<User>;
}
