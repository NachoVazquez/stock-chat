import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { WsException } from '@nestjs/websockets';
import * as jwt from 'jsonwebtoken';
import * as os from 'os';

import { environment } from '@stock-chat/api/shared/environments';
import { User, UsersService } from '@stock-chat/api/shared/user/domain-user';

@Injectable()
export class JwtService {
  constructor(private readonly usersService: UsersService) {}

  /**
   * Generates a new JWT token
   *
   * @param  user - The user to create the payload for the JWT
   * @returns  tokens - The access and the refresh token
   */
  async generateToken(user: User): Promise<any> {
    const payload = {
      sub: {
        _id: user._id,
        email: user.email,
        name: user.name,
      },
      iss: os.hostname(),
    };
    const accessToken = await jwt.sign(payload, environment.jwtSecret, {
      expiresIn: environment.accessTokenExpires,
    });
    const refreshToken = await jwt.sign(payload, environment.jwtSecret, {
      expiresIn: environment.refreshTokenExpires,
    });

    return { accessToken, refreshToken };
  }

  /**
   * Validates the token
   *
   * @param  token - The JWT token to validate
   * @param  isWs - True to handle WS exception instead of HTTP exception (default: false)
   */
  async verify(token: string, isWs: boolean = false): Promise<User | null> {
    try {
      const payload = <any>jwt.verify(token, environment.jwtSecret);
      const user = await this.usersService.findById(payload.sub._id);

      if (!user) {
        if (isWs) {
          throw new WsException('Unauthorized access');
        } else {
          throw new HttpException(
            'Unauthorized access',
            HttpStatus.BAD_REQUEST
          );
        }
      }

      return user;
    } catch (err) {
      if (isWs) {
        throw new WsException(err.message);
      } else {
        throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
      }
    }
  }
}
