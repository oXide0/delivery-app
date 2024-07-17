import { Controller, Get, Post, Put, Delete, Body, Query, Param } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderItemService } from '../order-item/order-item.service';
import { Order } from './order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { CreateOrderItemDto } from '../order-item/dto/create-order-item.dto';
import { UpdateOrderItemDto } from '../order-item/dto/update-order-item.dto';
import { OrderItem } from '../order-item/order-item.entity';

@Controller('orders')
export class OrderController {
    constructor(
        private readonly orderService: OrderService,
        private readonly orderItemService: OrderItemService
    ) {}

    @Get()
    async getAllOrders(@Query('userId') userId: string): Promise<Order[]> {
        return this.orderService.findAllByUserId(userId);
    }

    @Post('create')
    async createOrder(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
        return this.orderService.create(createOrderDto);
    }

    @Get('items')
    async getAllOrderItems(@Query('orderId') orderId: string): Promise<OrderItem[]> {
        return this.orderItemService.findAllByOrderId(orderId);
    }

    @Post('items')
    async createOrderItem(@Body() createOrderItemDto: CreateOrderItemDto): Promise<OrderItem> {
        return this.orderItemService.create(createOrderItemDto);
    }

    @Put('items/:id')
    async updateOrderItem(
        @Param('id') id: string,
        @Body() updateOrderItemDto: UpdateOrderItemDto
    ): Promise<OrderItem> {
        return this.orderItemService.update(id, updateOrderItemDto);
    }

    @Delete('items/:id')
    async removeOrderItem(@Param('id') id: string): Promise<void> {
        return this.orderItemService.remove(id);
    }
}
