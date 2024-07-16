import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, Unique } from 'typeorm';
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
    @Unique(['email'])
    email: string;

    @CreateDateColumn()
    createdAt: Date;
}
