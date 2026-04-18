import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }
  @HttpCode(HttpStatus.OK)
  @Post('admin/login')
  loginAdmin(@Body() input: { email: string, password: string }) {
    return this.authService.authenticateAdmin(input) || "not Found";
  }

  @Post('assistant/login')
  loginAssistant(@Body() input: { email: string, password: string }) {
    return this.authService.authenticateAssistant(input) || "not Found";
  }

  @Post('salesman/login')
  loginSalesman(@Body() input: { email: string, password: string }) {
    return this.authService.authenticateSalesman(input) || "not Found";
  }

  @UseGuards(AuthGuard)
  @Get('me')
  getUserInfo(@Request() request) {
    return request.user
  }
}
