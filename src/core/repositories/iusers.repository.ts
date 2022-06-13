import { ICreateUserDTO } from '../../presentation/users/dtos/create-user.dto';

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
}
