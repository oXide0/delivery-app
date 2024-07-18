import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderService } from 'src/order/order.service';
import { ProductService } from 'src/product/product.service';
import { Repository } from 'typeorm';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import { OrderItem } from './order-item.entity';

@Injectable()
export class OrderItemService {
    constructor(
        @InjectRepository(OrderItem)
        private orderItemRepository: Repository<OrderItem>,
        private orderService: OrderService,
        private productService: ProductService
    ) {}

    async findAllByOrderId(orderId: string): Promise<OrderItem[]> {
        return this.orderItemRepository.find({ where: { order: { id: orderId } } });
    }

    async create(createOrderItemDto: CreateOrderItemDto): Promise<OrderItem> {
        const { orderId, productId } = createOrderItemDto;

        const order = await this.orderService.findOne(orderId);
        if (!order) {
            throw new NotFoundException('Order not found');
        }

        const product = await this.productService.findOne(productId);
        if (!product) {
            throw new NotFoundException('Product not found');
        }

        const orderItem = this.orderItemRepository.create({
            order,
            quantity: 1,
        });

        return this.orderItemRepository.save(orderItem);
    }

    async update(id: string, updateOrderItemDto: UpdateOrderItemDto): Promise<OrderItem> {
        const orderItem = await this.orderItemRepository.findOne({ where: { id } });
        if (!orderItem) {
            throw new NotFoundException('OrderItem not found');
        }

        const order = await this.orderService.findOne(updateOrderItemDto.orderId);
        if (!order) {
            throw new NotFoundException('Order not found');
        }

        const product = await this.productService.findOne(updateOrderItemDto.productId);
        if (!product) {
            throw new NotFoundException('Product not found');
        }

        if (updateOrderItemDto.quantity !== undefined) {
            orderItem.quantity = updateOrderItemDto.quantity;
        }

        return this.orderItemRepository.save(orderItem);
    }

    async remove(id: string): Promise<void> {
        const orderItem = await this.orderItemRepository.findOne({ where: { id } });
        if (!orderItem) {
            throw new NotFoundException('OrderItem not found');
        }

        await this.orderItemRepository.remove(orderItem);
    }
}
