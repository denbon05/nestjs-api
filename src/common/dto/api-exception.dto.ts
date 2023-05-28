import { HttpException } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class ApiHttpException extends HttpException {
  @ApiProperty()
  public message: string;
}
