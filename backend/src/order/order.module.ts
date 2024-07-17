import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderItemModule } from 'src/order-item/order-item.module';
import { UserModule } from 'src/user/user.module';
import { OrderController } from './order.controller';
import { Order } from './order.entity';
import { OrderService } from './order.service';

@Module({
    imports: [TypeOrmModule.forFeature([Order]), UserModule, forwardRef(() => OrderItemModule)],
    providers: [OrderService],
    controllers: [OrderController],
    exports: [TypeOrmModule],
})
export class OrderModule {}
