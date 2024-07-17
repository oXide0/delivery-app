import { IsNotEmpty } from 'class-validator';
import { OrderItem } from 'src/order-item/order-item.entity';
import { Customer } from 'src/user/user.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderStatus } from './interfaces/order.interface';

@Entity()
export class Order {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('decimal')
    @IsNotEmpty()
    totalPrice: number;

    @Column()
    @IsNotEmpty()
    status: OrderStatus;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => Customer, (customer) => customer.orders)
    user: Customer;

    @OneToMany(() => OrderItem, (order) => order.order)
    orderItems: OrderItem[];
}
