import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
  Request,
} from '@nestjs/common';

import { AuthService } from '@stock-chat/api/auth/domain';
import { UsersService } from '@stock-chat/api/shared/user/domain-user';
import {
  CreateUserDTO,
  SignInDTO,
  SignInResponseDTO,
} from '@stock-chat/shared/dtos';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService
  ) {}

  @Post('/signin')
  @HttpCode(200)
  async signin(@Body() signInData: SignInDTO): Promise<SignInResponseDTO> {
    if (!signInData) {
      throw new HttpException('Body is missing', HttpStatus.BAD_REQUEST);
    }
    if (!signInData.email || !signInData.password) {
      throw new HttpException(
        'Missing email or password',
        HttpStatus.BAD_REQUEST
      );
    }

    return await this.authService.sign(signInData);
  }

  @Post('signup')
  async signup(@Body() user: CreateUserDTO) {
    if (!user || (user && Object.keys(user).length === 0)) {
      throw new HttpException('Missing informations', HttpStatus.BAD_REQUEST);
    }
    try {
      await this.usersService.create(user);
    } catch (error) {
      console.log(JSON.stringify(error));
      if (error.code === 11000) {
        throw new HttpException(
          'User Identifier already exits ' + JSON.stringify(error.keyPattern),
          HttpStatus.BAD_REQUEST
        );
      }
      throw new HttpException('', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('/refresh-token')
  async refreshToken(@Request() req): Promise<any> {
    const body = req.body;

    return await this.authService.refreshToken(body.refreshToken);
  }
}
