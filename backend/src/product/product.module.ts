import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { Product } from './product.entity';
import { OrderModule } from 'src/order/order.module';

@Module({
    imports: [TypeOrmModule.forFeature([Product]), OrderModule],
    providers: [ProductService],
    controllers: [ProductController],
})
export class ProductModule {}
