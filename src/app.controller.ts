import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './entityes/user/user.entity';
import { UserService } from './entityes/user/user.service';
import { UserController } from './entityes/user/user.controller';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  getHello(): string {
    return this.appService.getHello();
  }
}
