import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async signUp(name: string, password: string) {}

  async login(name: string, password: string) {}
}
