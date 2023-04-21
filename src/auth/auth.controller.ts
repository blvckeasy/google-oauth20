import { Body, Controller, Get, Headers, HostParam, UseGuards } from '@nestjs/common';
import { HeaderVersioningOptions } from '@nestjs/common/interfaces'
import { AuthService } from 'src/auth/auth.service'
import { LoginDto } from 'src/auth/dto'
import { GoogleAuthGuard } from 'src/auth/utils/Guards'


@Controller({
  path: 'auth',
  version: '1'
})
export class AuthController {
  constructor(
    private authService: AuthService,
  ){}

  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  async handleLogin () {
    return { version: 1, msg: 'Google Authentication' }
  }

  // /api/v1/auth/google/redirect
  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  async handleRedirect () {
    return { version: 1, msg: 'ok' }
  }
}
