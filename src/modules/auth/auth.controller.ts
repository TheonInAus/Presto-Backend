import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up.dto';
import { SignInDto } from './dto/sign-in.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() signUpDto: SignUpDto) {
    const { name, password } = signUpDto;
    return await this.authService.signUp(name, password);
  }

  @Get('login')
  async login(@Body() signInDto: SignInDto) {
    const { name, password } = signInDto;
    return await this.authService.login(name, password);
  }
}
