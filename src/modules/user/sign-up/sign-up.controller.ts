import { Controller, Post } from '@nestjs/common';
import { SignUpService } from './sign-up.service';

@Controller('user/sign-up')
export class SignUpController {
  constructor(private readonly signUpService: SignUpService) {}

  @Post()
  signUp(): string {
    return this.signUpService.signUp();
  }
}
