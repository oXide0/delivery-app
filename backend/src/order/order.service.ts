import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './order.entity';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Order)
        private orderRepository: Repository<Order>
    ) {}

    async findOne(id: string): Promise<Order> {
        return this.orderRepository.findOne({ where: { id } });
    }

    async findAllByUserId(userId: string): Promise<Order[]> {
        return this.orderRepository.find({
            where: {
                user: { id: userId },
                status: 'completed',
            },
            relations: ['user'],
        });
    }

    async findActiveOrderByUserId(userId: string): Promise<Order> {
        const res = await this.orderRepository.findOne({
            where: {
                user: { id: userId },
                status: 'active',
            },
            relations: ['orderItems'],
        });
        return res;
    }

    async create(order: CreateOrderDto): Promise<Order> {
        const newOrder = this.orderRepository.create({
            id: uuid(),
            totalPrice: 0,
            status: 'active',
            createdAt: new Date(),
            user: { id: order.userId },
        });
        return this.orderRepository.save(newOrder);
    }

    async completeOrder(id: string): Promise<Order> {
        const order = await this.orderRepository.findOne({
            where: { id },
            relations: ['orderItems', 'user'],
        });

        order.status = 'completed';
        order.totalPrice = order.orderItems
            .map((item) => item.product.price * item.quantity)
            .reduce((a, b) => a + b, 0);

        await this.create({ userId: order.user.id });
        return this.orderRepository.save(order);
    }
}
