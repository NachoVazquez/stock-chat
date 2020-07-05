import { CreateUserDTO } from './create-user.dto';

export interface UserDTO extends CreateUserDTO {
  _id: string;
}
