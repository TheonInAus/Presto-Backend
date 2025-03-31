import { Injectable } from '@nestjs/common';
import { SignUpDto } from './dto/sign-up.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class SignUpService {
  constructor(@InjectModel(User.name) private userSchema: Model<User>) {}

  async signUp(signUpDto: SignUpDto): Promise<string> {
    const userExist = await this.userSchema.find({ name: signUpDto.name });
    if (userExist.length) {
      return 'User already exists';
    }
    const user = new this.userSchema(signUpDto);
    await user.save();
    return 'User created';
  }
}
