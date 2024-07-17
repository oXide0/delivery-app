import { IsEmail, IsNotEmpty } from 'class-validator';

export class SendCodeDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    username: string;
}
