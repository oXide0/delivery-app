import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { Customer } from '../user/user.entity';

@Entity()
export class Order {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Customer, (user) => user.orders)
    user: Customer;

    @Column('decimal')
    totalPrice: number;

    @Column()
    status: string;

    @CreateDateColumn()
    createdAt: Date;
}
