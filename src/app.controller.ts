import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtService } from '@nestjs/jwt'


@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly jwtService: JwtService,
  ) {}

  @Get()
  getHello(): string {
    return this.jwtService.sign("hello world", { expiresIn: 120 })
  }
}
