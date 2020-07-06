import { UserDTO } from '../user/user.dto';
export interface SignInResponseDTO {
  tokens: any;
  user: UserDTO;
}
