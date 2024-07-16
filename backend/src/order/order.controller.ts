import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './order.entity';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('orders')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    @Get()
    async findAll(@Query('userId') userId: string): Promise<Order[]> {
        return this.orderService.findAll(userId);
    }

    @Post('create')
    async create(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
        return this.orderService.create({
            // user: { id: createOrderDto.userId },
            // totalPrice: createOrderDto.totalPrice,
            // status: createOrderDto.status,
            createdAt: new Date(),
        });
    }
}
