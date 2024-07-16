import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { Order } from './order.entity';
import { Customer } from '../user/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Order, Customer])],
    providers: [OrderService],
    controllers: [OrderController],
})
export class OrderModule {}
