import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  Length,
  MinLength,
} from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @Length(4, 16)
  userName: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  refreshToken?: string;
}
