import { HttpException, HttpStatus } from '@nestjs/common';

export class MoongoseException extends HttpException {
  constructor(errorCode: number, data: any) {
    if (errorCode == 11000) {
      super(`duplicate value at: ` + data, HttpStatus.BAD_REQUEST);
    }
  }
}
