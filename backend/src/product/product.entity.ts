import { IsNotEmpty } from 'class-validator';
import { Order } from 'src/order/order.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    @IsNotEmpty()
    title: string;

    @Column('decimal')
    @IsNotEmpty()
    price: number;

    @Column()
    @IsNotEmpty()
    category: 'burgers' | 'pizzas' | 'drinks' | 'desserts';

    @Column()
    @IsNotEmpty()
    imgUrl: string;

    @ManyToOne(() => Order, (order) => order.products)
    order: Order;
}
