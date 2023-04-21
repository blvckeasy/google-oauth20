import { ApiProperty } from "@nestjs/swagger"

export class LoginDto {
  @ApiProperty({
    'description': "this is"
  })
  username: string;
  @ApiProperty({
    'description': "for usage",
  })
  password: string;
}