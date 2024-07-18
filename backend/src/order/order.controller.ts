import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateOrderItemDto } from '../order-item/dto/create-order-item.dto';
import { UpdateOrderItemDto } from '../order-item/dto/update-order-item.dto';
import { OrderItem } from '../order-item/order-item.entity';
import { OrderItemService } from '../order-item/order-item.service';
import { Order } from './order.entity';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
    constructor(
        private readonly orderService: OrderService,
        private readonly orderItemService: OrderItemService
    ) {}

    @Get('active')
    async getActiveOrder(@Query('userId') userId: string) {
        return this.orderService.findActiveOrderByUserId(userId);
    }

    @Get('history')
    async getAllOrders(@Query('userId') userId: string): Promise<Order[]> {
        return this.orderService.findAllByUserId(userId);
    }

    @Post('items')
    async createOrderItem(@Body() createOrderItemDto: CreateOrderItemDto): Promise<OrderItem> {
        return this.orderItemService.create(createOrderItemDto);
    }

    @Post('items/status/:id')
    async updateOrderStatus(@Param('id') id: string): Promise<Order> {
        return this.orderService.updateStatus(id);
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
