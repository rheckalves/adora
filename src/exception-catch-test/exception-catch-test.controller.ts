import {
  Controller,
  Get,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

@Controller('exception-catch-test')
export class ExceptionCatchTestController {
  @Get('/404')
  404() {
    try {
      if (true) throw new NotFoundException();
    } catch (error) {
      console.log(error.message);
    }
  }

  @Get('/500')
  500() {
    try {
      if (true) throw new InternalServerErrorException();
    } catch (error) {
      console.log(error.message);
    }
  }
}
