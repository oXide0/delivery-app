import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Order)
        private ordersRepository: Repository<Order>
    ) {}

    async findAll(userId: string): Promise<Order[]> {
        return this.ordersRepository.find({});
    }

    async create(order: Partial<Order>): Promise<Order> {
        // const newOrder = this.ordersRepository.create({
        //     id: uuid(),
        //     createdAt: order.createdAt,
        //     status: order.status,
        //     totalPrice: order.totalPrice,
        //     user: order.user,
        // });
        return this.ordersRepository.save(order);
    }
}
