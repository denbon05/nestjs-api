import { Controller, HttpCode, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request as ExpressRequest } from 'express';
import { Public } from 'src/common/decorators/public.decorator';
import { ApiHttpException } from 'src/common/dto/api-exception.dto';
import { UserDto } from 'src/users/dto/user.dto';
import { AuthService } from './auth.service';
import { JwtDto } from './dto/jwt.dto';
import { LoginDto } from './dto/login.dto';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
@ApiTags('Auth')
@ApiResponse({
  status: 401,
  description: 'Unauthorized',
  type: ApiHttpException,
})
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @HttpCode(200)
  @ApiOperation({ summary: 'Log In' })
  @ApiBody({ description: 'User credentials', type: LoginDto })
  @ApiResponse({ status: 200, description: 'Success', type: JwtDto })
  async login(@Request() { user }: ExpressRequest & { user: UserDto }) {
    return this.authService.login(user);
  }
}
