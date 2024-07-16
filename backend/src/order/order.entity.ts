import { IsNotEmpty } from 'class-validator';
import { Product } from 'src/product/product.entity';
import { Customer } from 'src/user/user.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('decimal')
    @IsNotEmpty()
    totalPrice: number;

    @Column()
    @IsNotEmpty()
    status: 'active' | 'completed';

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => Customer, (customer) => customer.orders)
    user: Customer;

    @OneToMany(() => Product, (product) => product.order)
    products: Product[];
}
