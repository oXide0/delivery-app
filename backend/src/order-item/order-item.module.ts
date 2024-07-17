import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderModule } from 'src/order/order.module';
import { ProductModule } from 'src/product/product.module';
import { OrderItem } from './order-item.entity';
import { OrderItemService } from './order-item.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([OrderItem]),
        forwardRef(() => OrderModule),
        forwardRef(() => ProductModule),
    ],
    providers: [OrderItemService],
    exports: [OrderItemService, TypeOrmModule],
})
export class OrderItemModule {}
