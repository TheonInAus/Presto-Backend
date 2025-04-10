import { HttpException, Injectable } from '@nestjs/common';
import { SignUpDto } from './dto/sign-up.dto';
import { SignInDto } from './dto/sign-in.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(signUpDto: SignUpDto) {
    const userExist = await this.userModel.findOne({ name: signUpDto.name });
    if (userExist) {
      throw new HttpException('User already exists', 400);
    }
    const { name, password } = signUpDto;
    const user = new this.userModel({
      name: name,
      password: await bcrypt.hash(password, 10),
    });
    await user.save();

    return {
      access_token: this.jwtService.sign({
        name: signUpDto.name,
      }),
    };
  }

  async login(signInDto: SignInDto) {
    const user = await this.userModel.findOne({ name: signInDto.name });
    if (!user) {
      throw new HttpException('User not found', 404);
    }

    const result = await bcrypt.compare(signInDto.password, user.password);

    if (result === false) {
      throw new HttpException('Invalid password', 401);
    }

    return {
      access_token: this.jwtService.sign({
        name: signInDto.name,
      }),
    };
  }
}
