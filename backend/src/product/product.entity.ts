import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
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
}
