import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AuthGuard } from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';
import { EmailModule } from './email/email.module';
import { OrderItem } from './order-item/order-item.entity';
import { OrderItemModule } from './order-item/order-item.module';
import { Order } from './order/order.entity';
import { OrderModule } from './order/order.module';
import { Product } from './product/product.entity';
import { ProductModule } from './product/product.module';
import { Customer } from './user/user.entity';
import { UserModule } from './user/user.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
            isGlobal: true,
        }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT),
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            entities: [Customer, Product, Order, OrderItem],
            synchronize: true,
            autoLoadEntities: true,
        }),
        MongooseModule.forRoot(process.env.MONGO_URI),
        AuthModule,
        UserModule,
        ProductModule,
        OrderModule,
        OrderItemModule,
        EmailModule,
    ],
    providers: [{ provide: APP_GUARD, useClass: AuthGuard }],
})
export class AppModule {
    constructor(private readonly dataSource: DataSource) {}
}
