import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Request,
} from '@nestjs/common';

import { AuthService } from '@stock-chat/api/auth/domain';
import { User, UsersService } from '@stock-chat/api/shared/user/domain-user';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService
  ) {}

  @Post('/signin')
  async signin(@Request() req): Promise<any> {
    const body = req.body;

    if (!body) {
      throw new HttpException('Body is missing', HttpStatus.BAD_REQUEST);
    }
    if (!body.email || !body.password) {
      throw new HttpException(
        'Missing email or password',
        HttpStatus.BAD_REQUEST
      );
    }

    return await this.authService.sign(body);
  }

  @Post('signup')
  async signup(@Body() user: User) {
    if (!user || (user && Object.keys(user).length === 0)) {
      throw new HttpException('Missing informations', HttpStatus.BAD_REQUEST);
    }

    await this.usersService.create(user);
  }

  @Post('/refresh-token')
  async refreshToken(@Request() req): Promise<any> {
    const body = req.body;

    return await this.authService.refreshToken(body.refreshToken);
  }
}
