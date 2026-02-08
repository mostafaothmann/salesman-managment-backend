import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';

@Controller('auth/Salesman')
export class AuthSalesmanController {
  constructor( private authService: AuthService){}
  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() input :{email:string,password:string}){
    return this.authService.authenticateSalesman(input)  || "not Found";
  }

  @UseGuards(AuthGuard)
  @Get('me')
  getUserInfo(@Request() request){
    return request.user
  }
}
