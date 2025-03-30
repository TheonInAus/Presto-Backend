import { Body, Controller, Post } from '@nestjs/common';
import { SignUpService } from './sign-up.service';
import { SignUpDto } from './dto/sign-up.dto';

@Controller('user/sign-up')
export class SignUpController {
  constructor(private readonly signUpService: SignUpService) {}

  @Post()
  signUp(@Body() signUpDto: SignUpDto): string {
    return this.signUpService.signUp(signUpDto);
  }
}
