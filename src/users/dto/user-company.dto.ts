import { ApiProperty } from '@nestjs/swagger';

export class UserCompanyDto {
  @ApiProperty({ example: 'Romaguera-Crona' })
  name: string;

  @ApiProperty({ example: 'Multi-layered client-server neural-net' })
  catchPhrase: string;

  @ApiProperty({ example: 'harness real-time e-markets' })
  bs: string;
}
