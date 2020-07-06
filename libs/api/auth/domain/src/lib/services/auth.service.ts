import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { JwtService } from '@stock-chat/api/shared/auth/domain-jwt';
import { User, UsersService } from '@stock-chat/api/shared/user/domain-user';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  /**
   * Verifies the user used the right credentials
   *
   * @param signedUser currently signed user
   *
   * @returns  isValid - true if the user can be authenticated
   */
  private async checkUserPassword(
    signedUser: User,
    password: string
  ): Promise<Boolean> {
    if (signedUser.password !== password) {
      return false;
    }

    return true;
  }

  /**
   * Signs the user to the application by generating JWT tokens
   *
   * @param credentials - The user credentials
   * @returns data - The access and the refresh token to authenticate the user and the user
   */
  async sign(credentials: { email: string; password: string }): Promise<any> {
    const user = await this.usersService.findOne({ email: credentials.email });
    if (!user) {
      throw new HttpException(
        'The specified user does not exists',
        HttpStatus.BAD_REQUEST
      );
    }

    const serializedUser = user.schema.methods.serialize(user);
    const isValid = await this.checkUserPassword(user, credentials.password);
    if (!isValid) {
      throw new HttpException(
        'The email/password combination is invalid',
        HttpStatus.BAD_REQUEST
      );
    }

    const tokens = await this.jwtService.generateToken(serializedUser);

    return { tokens, user: serializedUser };
  }

  /**
   * Generating new JWT tokens to keep the user authenticated
   *
   * @param token refresh token
   * @returns data - The new access and the refresh token to authenticate the user and the user
   */
  async refreshToken(token: string): Promise<any> {
    const user: User = await this.jwtService.verify(token);
    const tokens = await this.jwtService.generateToken(user);

    return { tokens, user };
  }
}
