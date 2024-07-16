import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    title: string;

    @Column()
    @IsNotEmpty()
    @IsNumber()
    price: number;

    @Column()
    @IsNotEmpty()
    @IsString()
    category: string;

    @Column()
    @IsNotEmpty()
    @IsString()
    img: string;
}
