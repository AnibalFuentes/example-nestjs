import {
  Controller,
  Get,
  HttpCode,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller()
export class HelloController {
  @Get('Hello')
  index(@Req() request: Request, @Res() response: Response) {
    console.log(request.url);
    response.status(200).json({
      message: 'Hello World',
    });
  }

  @Get('new')
  @HttpCode(201)
  somethingNew() {
    return {
      message: 'Something New',
    };
  }

  @Get('notfound')
  @HttpCode(404)
  notFoundPage() {
    return {
      message: '404 Page not found',
    };
  }

  @Get('error')
  @HttpCode(500)
  errorPage() {
    return {
      message: 'Error Routte',
    };
  }

  //pipes

  @Get('ticket/:num')
  getNumber(@Param('num', ParseIntPipe) num: number) {
    console.log(typeof num);
    return num + 14;
  }

  @Get('active/:status')
  isUserActive(@Param('status', ParseBoolPipe) status: boolean) {
    console.log(typeof status);
    return status;
  }

  @Get('greet')
  @UseGuards(AuthGuard)
  greet(@Query(ValidateuserPipe) query: { name: string; age: number }) {
    console.log(typeof query.name);
    console.log(typeof query.age);
    return {
      message: `Hello ${query.name} you are ${query.age + 10} years old`,
    };
  }
}
