import { Body, Controller, Post } from '@nestjs/common';
import { CreatUserDto } from './dtos/create-user.dto';
@Controller('auth')
export class UsersController {
  @Post('/signup')
  createUser(@Body() body: CreatUserDto) {
    console.log(body);
  }
}
