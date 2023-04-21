import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt'
import { LoginDto } from 'src/auth/dto'

@Injectable()
export class AuthService {
  constructor (
    private jwtService: JwtService,
  ) {}

  async signTkken() {
    return {
      access_token: this.jwtService.sign({
        hello: 'world'
      }),
    }
  }

  async login(loginDto: LoginDto) {
    
  }
}
