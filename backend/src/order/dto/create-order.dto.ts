import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator';

export class CreateOrderDto {
    @IsUUID()
    @IsNotEmpty()
    userId: string;

    @IsNotEmpty()
    @IsNumber()
    totalPrice: number;

    @IsNotEmpty()
    status: string;
}
