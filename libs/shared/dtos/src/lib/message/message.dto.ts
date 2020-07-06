import { UserDTO } from '../user';

import { CreateMessageDTO } from './create-message.dto';

export interface MessageDTO extends CreateMessageDTO {
  created_at: Date;
  _id: string;
}
