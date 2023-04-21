import { Injectable } from '@nestjs/common'
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from "passport-google-oauth20";


@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      clientID: '851674837855-cks9h05ic780idus0er06nab2qu7460v.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:8000/api/v1/auth/google/redirect',
      scope: ['profile', 'email']
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    console.log(accessToken)
    console.log(refreshToken)
    console.log(profile)
  }
}