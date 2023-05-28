import { ApiProperty } from '@nestjs/swagger';
import { UserAddressDto } from './user-address.dto';
import { UserCompanyDto } from './user-company.dto';

export class UserDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Leanne Graham' })
  name: string;

  @ApiProperty({ example: 'Bret' })
  username: string;

  @ApiProperty({ example: 'Sincere@april.biz' })
  email: string;

  @ApiProperty({ type: UserAddressDto })
  address: UserAddressDto;

  @ApiProperty({ example: '1-770-736-8031 x56442' })
  phone: string;

  @ApiProperty({ example: 'hildegard.org' })
  website: string;

  @ApiProperty({ type: UserCompanyDto })
  company: UserCompanyDto;
}
