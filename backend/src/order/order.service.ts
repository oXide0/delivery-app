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

    async findAllByUserId(userId: string): Promise<Order[]> {
        return this.orderRepository.find({
            where: {
                user: { id: userId },
            },
            relations: ['user'],
        });
    }

    async create(order: CreateOrderDto): Promise<Order> {
        const newOrder = this.orderRepository.create({
            id: uuid(),
            totalPrice: order.totalPrice,
            status: 'active',
            createdAt: new Date(),
            user: { id: order.userId },
        });
        return this.orderRepository.save(newOrder);
    }
}
