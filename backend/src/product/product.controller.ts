import { Controller, Get, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { ProductCategory } from './interfaces/product.interface';

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    async getAllProducts(): Promise<Product[]> {
        return this.productService.findAll();
    }

    @Get()
    async getProductsByCategory(@Query('category') category: ProductCategory): Promise<Product[]> {
        return this.productService.findProductsByCategory(category);
    }
}
