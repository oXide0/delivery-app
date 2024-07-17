import { IsNotEmpty } from 'class-validator';
import { OrderItem } from 'src/order-item/order-item.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProductCategory } from './interfaces/product.interface';

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
    category: ProductCategory;

    @Column()
    @IsNotEmpty()
    imgUrl: string;

    @OneToOne(() => OrderItem, (order) => order.product)
    orderItem: OrderItem;
}
