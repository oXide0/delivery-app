import { Order } from 'src/order/order.entity';
import { Product } from 'src/product/product.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OrderItem {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    quantity: number;

    @ManyToOne(() => Order, (order) => order.orderItems)
    order: Order;

    @ManyToOne(() => Product, { eager: true })
    product: Product;
}
