import { ApiProperty } from '@nestjs/swagger';

class AddressGeoDto {
  @ApiProperty({ example: '-37.3159' })
  lat: string;

  @ApiProperty({ example: '81.1496' })
  lng: string;
}

export class UserAddressDto {
  @ApiProperty({ example: 'Kulas Light' })
  street: string;

  @ApiProperty({ example: 'Apt. 556' })
  suite: string;

  @ApiProperty({ example: 'Gwenborough' })
  city: string;

  @ApiProperty({ example: '92998-3874' })
  zipcode: string;

  @ApiProperty({ type: AddressGeoDto })
  geo: AddressGeoDto;
}
