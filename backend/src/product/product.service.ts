import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { ProductCategory } from './interfaces/product.interface';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>
    ) {}

    async findAll(): Promise<Product[]> {
        return this.productRepository.find();
    }

    async create(product: Product): Promise<Product> {
        return this.productRepository.save(product);
    }

    async findProductsByCategory(category: ProductCategory): Promise<Product[]> {
        return this.productRepository.find({ where: { category } });
    }
}
