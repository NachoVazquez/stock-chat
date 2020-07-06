import { Injectable, NestMiddleware } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

import { environment } from '@stock-chat/api/shared/environments';

@Injectable()
export class GetUserMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const authJwtToken = req.headers['authorization'];

    if (!authJwtToken) {
      next();
      return;
    }

    try {
      const user = jwt.verify(authJwtToken, environment.jwtSecret);

      if (user) {
        req['user'] = user;
      }
    } catch (err) {
      console.log('Error handling authentication JWT: ', err);
    }
    next();
  }
}
