import { IsOptional, IsUUID, IsInt, Min, IsNotEmpty } from 'class-validator';

export class UpdateOrderItemDto {
    @IsNotEmpty()
    @IsUUID()
    orderId: string;

    @IsNotEmpty()
    @IsUUID()
    productId: string;

    @IsOptional()
    @IsInt()
    @Min(1)
    quantity?: number;
}
