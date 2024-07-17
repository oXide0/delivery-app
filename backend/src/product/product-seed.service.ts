import { Injectable } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ProductSeedService {
    constructor(private readonly productService: ProductService) {}

    async seed() {
        const products: Product[] = [
            {
                id: uuid(),
                title: 'Burger',
                category: 'burgers',
                imgUrl: 'https://ais.kochbar.de/kbrezept/284621_878966/1200x1200/burger-rezept-bild-nr-1187.jpg',
                price: 5.99,
                orderItem: null,
            },
        ];

        for (const product of products) {
            await this.productService.create(product);
        }

        console.log('Products have been seeded');
    }
}
