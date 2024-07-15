import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

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
    email: string;

    @CreateDateColumn()
    createdAt: Date;
}
