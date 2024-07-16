import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    username: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
}
