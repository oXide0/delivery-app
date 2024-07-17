import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderItemModule } from 'src/order-item/order-item.module';
import { ProductController } from './product.controller';
import { Product } from './product.entity';
import { ProductService } from './product.service';
import { ProductSeedService } from './product-seed.service';

@Module({
    imports: [TypeOrmModule.forFeature([Product]), forwardRef(() => OrderItemModule)],
    providers: [ProductService, ProductSeedService],
    controllers: [ProductController],
    exports: [TypeOrmModule, ProductSeedService],
})
export class ProductModule {}
