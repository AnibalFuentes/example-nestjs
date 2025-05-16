import { IsEmail, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsEmail()
  @IsString()
  email: string;

  @IsString()
  name: string;
}
