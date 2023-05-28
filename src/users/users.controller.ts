import { Controller, Get, Param } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ApiHttpException } from 'src/common/dto/api-exception.dto';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('Users')
@ApiBearerAuth()
@ApiResponse({
  status: 401,
  description: 'Unauthorized',
  type: ApiHttpException,
})
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: [UserDto],
  })
  async fetchAll() {
    const res = await this.usersService.fetchAll();
    return res;
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a user by ID' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: UserDto,
  })
  @ApiResponse({
    status: 404,
    description: 'User not found',
    type: ApiHttpException,
  })
  async findOne(@Param('id') id: number) {
    return this.usersService.findOne({ id });
  }
}
