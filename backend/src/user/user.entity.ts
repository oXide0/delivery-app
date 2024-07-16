import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    Unique,
    OneToMany,
} from 'typeorm';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Order } from 'src/order/order.entity';

@Entity()
export class Customer {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    username: string;

    @Column()
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string;

    @Column()
    @IsNotEmpty()
    @IsEmail()
    @Unique(['email'])
    email: string;

    @CreateDateColumn()
    createdAt: Date;

    @OneToMany(() => Order, (order) => order.user)
    orders: Order[];
}
