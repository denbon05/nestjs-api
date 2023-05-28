import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IJwtPayload } from 'src/types/auth';
import { UserDto } from 'src/users/dto/user.dto';
import { UsersService } from 'src/users/users.service';
import { hashValue } from 'src/utils/crypto';

// username: Bret
// password: admin
const ADMIN_PASS_HASH =
  '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    username: UserDto['name'],
    pass: string,
  ): Promise<UserDto | null> {
    const user = await this.userService.findOne({ username });

    if (user && hashValue(pass) === ADMIN_PASS_HASH) {
      return user;
    }

    return null;
  }

  async login(user: Pick<UserDto, 'username' | 'id'>) {
    const payload: IJwtPayload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
