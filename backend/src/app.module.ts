import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AuthModule } from './auth/auth.module';
import { ProductController } from './product/product.controller';
import { ProductModule } from './product/product.module';
import { ProductService } from './product/product.service';
import { Customer } from './user/user.entity';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.development.env',
        }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT),
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            entities: [Customer],
            synchronize: true,
            autoLoadEntities: true,
        }),
        AuthModule,
        UserModule,
        ProductModule,
        OrderModule,
    ],
    controllers: [ProductController],
    providers: [ProductService],
})
export class AppModule {
    constructor(private readonly dataSource: DataSource) {}
}
