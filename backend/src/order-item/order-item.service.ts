import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderItem } from './order-item.entity';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import { Order } from '../order/order.entity';
import { Product } from '../product/product.entity';

@Injectable()
export class OrderItemService {
    constructor(
        @InjectRepository(OrderItem)
        private orderItemRepository: Repository<OrderItem>,
        @InjectRepository(Order)
        private orderRepository: Repository<Order>,
        @InjectRepository(Product)
        private productRepository: Repository<Product>
    ) {}

    async findAllByOrderId(orderId: string): Promise<OrderItem[]> {
        return this.orderItemRepository.find({ where: { order: { id: orderId } } });
    }

    async create(createOrderItemDto: CreateOrderItemDto): Promise<OrderItem> {
        const { orderId, productId, quantity } = createOrderItemDto;

        const order = await this.orderRepository.findOne({ where: { id: orderId } });
        if (!order) {
            throw new NotFoundException('Order not found');
        }

        const product = await this.productRepository.findOne({ where: { id: productId } });
        if (!product) {
            throw new NotFoundException('Product not found');
        }

        const orderItem = this.orderItemRepository.create({
            order,
            product,
            quantity,
        });

        return this.orderItemRepository.save(orderItem);
    }

    async update(id: string, updateOrderItemDto: UpdateOrderItemDto): Promise<OrderItem> {
        const orderItem = await this.orderItemRepository.findOne({ where: { id } });
        if (!orderItem) {
            throw new NotFoundException('OrderItem not found');
        }

        const order = await this.orderRepository.findOne({
            where: { id: updateOrderItemDto.orderId },
        });
        if (!order) {
            throw new NotFoundException('Order not found');
        }

        const product = await this.productRepository.findOne({
            where: { id: updateOrderItemDto.productId },
        });
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
