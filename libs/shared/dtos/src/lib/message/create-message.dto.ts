import { UserDTO } from '../user';

export interface CreateMessageDTO {
  message: string;
  user: UserDTO;
}
