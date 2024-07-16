import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateOrderDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    userId: string;

    @IsNotEmpty()
    @IsNumber()
    totalPrice: number;

    @IsNotEmpty()
    @IsString()
    status: string;

    createdAt: Date;
}
