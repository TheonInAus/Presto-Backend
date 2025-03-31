import { Module } from '@nestjs/common';
import { SignUpController } from './sign-up.controller';
import { SignUpService } from './sign-up.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schemas/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [SignUpController],
  providers: [SignUpService],
})
export class SignUpModule {}
