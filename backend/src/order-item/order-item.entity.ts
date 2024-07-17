import { Order } from 'src/order/order.entity';
import { Product } from 'src/product/product.entity';
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OrderItem {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    quantity: number;

    @ManyToOne(() => Order, (order) => order.orderItems)
    order: Order;

    @OneToOne(() => Product, (product) => product.orderItem)
    product: Product;
}
