import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'Bret', description: 'User name' })
  username: string;

  @ApiProperty({ example: 'admin', description: 'User password' })
  password: string;
}
