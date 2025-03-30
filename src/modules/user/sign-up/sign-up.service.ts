import { Injectable } from '@nestjs/common';
import { SignUpDto } from './dto/sign-up.dto';

@Injectable()
export class SignUpService {
  signUp(signUpDto: SignUpDto): string {
    return 'This action adds a new user';
  }
}
