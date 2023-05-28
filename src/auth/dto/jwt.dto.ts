import { ApiProperty } from '@nestjs/swagger';

export class JwtDto {
  @ApiProperty({
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vybm...',
    description: 'JWT',
  })
  access_key: string;
}
