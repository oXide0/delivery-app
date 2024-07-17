import { IsNotEmpty, IsUUID, IsInt, Min } from 'class-validator';

export class CreateOrderItemDto {
    @IsNotEmpty()
    @IsUUID()
    orderId: string;

    @IsNotEmpty()
    @IsUUID()
    productId: string;

    @IsInt()
    @Min(1)
    quantity: number;
}
