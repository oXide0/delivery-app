import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateOrderItemDto {
    @IsNotEmpty()
    @IsUUID()
    orderId: string;

    @IsNotEmpty()
    @IsUUID()
    productId: string;
}
