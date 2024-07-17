import { Injectable } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ProductSeedService {
    constructor(private readonly productService: ProductService) {}

    async seed() {
        const products: Product[] = [
            /* ------------------------------- BURGERS ------------------------------- */
            {
                id: uuid(),
                title: 'Basic',
                category: 'burgers',
                imgUrl: 'https://ais.kochbar.de/kbrezept/284621_878966/1200x1200/burger-rezept-bild-nr-1187.jpg',
                price: 5.99,
                orderItem: null,
            },
            {
                id: uuid(),
                title: 'Big Mac',
                category: 'burgers',
                imgUrl: 'https://s7d1.scene7.com/is/image/mcdonalds/Header_BigMac_832x472:product-header-desktop?wid=830&hei=456&dpr=off',
                price: 6.99,
                orderItem: null,
            },
            {
                id: uuid(),
                title: 'Cheeseburger',
                category: 'burgers',
                imgUrl: 'https://s7d1.scene7.com/is/image/mcdonalds/Header_Cheeseburger_832x472:product-header-desktop?wid=830&hei=458&dpr=off',
                price: 3.99,
                orderItem: null,
            },
            {
                id: uuid(),
                title: 'McDouble',
                category: 'burgers',
                imgUrl: 'https://s7d1.scene7.com/is/image/mcdonalds/Header_McDouble_832x472:product-header-desktop?wid=830&hei=458&dpr=off',
                price: 4.99,
                orderItem: null,
            },
            /* ------------------------------- PIZZA ------------------------------- */
            {
                id: uuid(),
                title: 'La Pizza',
                category: 'pizzas',
                imgUrl: 'https://www.diegovitagliano.it/wp-content/uploads/2023/03/diego-vitagliano-la-pizza-3.jpg',
                price: 5.99,
                orderItem: null,
            },
            {
                id: uuid(),
                title: 'Gluten Free',
                category: 'pizzas',
                imgUrl: 'https://www.diegovitagliano.it/wp-content/uploads/2023/03/pizze-senza-glutine-2.jpg',
                price: 6.99,
                orderItem: null,
            },
            {
                id: uuid(),
                title: 'Supreme Pizza',
                category: 'pizzas',
                imgUrl: 'https://www.southernliving.com/thmb/3x3cJaiOvQ8-3YxtMQX0vvh1hQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg',
                price: 3.99,
                orderItem: null,
            },
            {
                id: uuid(),
                title: 'I Prodotti',
                category: 'pizzas',
                imgUrl: 'https://www.diegovitagliano.it/wp-content/uploads/2023/03/la-pizza-prodotti-diego-vitagliano.jpg',
                price: 4.99,
                orderItem: null,
            },
            /* ------------------------------- DRINKS ------------------------------- */
            {
                id: uuid(),
                title: 'Coca‑Cola',
                category: 'drinks',
                imgUrl: 'https://www.coca-cola.com/content/dam/onexp/us/en/brands/coca-cola-local-tastes/v2/usa_coca-cola-peach-bottle_1100x1100.jpg/width1960.jpg',
                price: 5.99,
                orderItem: null,
            },
            {
                id: uuid(),
                title: 'Fanta',
                category: 'drinks',
                imgUrl: 'https://www.coca-cola.com/content/dam/onexp/us/en/brands/fanta/fanta-products-orange-base-img.jpg/width1960.jpg',
                price: 6.99,
                orderItem: null,
            },
            {
                id: uuid(),
                title: 'Sprite',
                category: 'drinks',
                imgUrl: 'https://www.coca-cola.com/content/dam/onexp/us/en/brands/sprite/products/en_sprite_prod_lymonade_20oz-bottle_750x750_v1.jpg/width1960.jpg',
                price: 3.99,
                orderItem: null,
            },
            {
                id: uuid(),
                title: 'Diet Coke',
                category: 'drinks',
                imgUrl: 'https://www.coca-cola.com/content/dam/onexp/us/en/brands/diet-coke/en_diet%20coke_prod_original_en_diet%20coke_prod_caffeine%20free_750x750_v1.jpg/width1960.jpg',
                price: 4.99,
                orderItem: null,
            },
            /* ------------------------------- DESSERTS ------------------------------- */
            {
                id: uuid(),
                title: 'McFlurry',
                category: 'desserts',
                imgUrl: 'https://www.mcdonalds.sk/uploads/images/products/551-sk/afe1a5043ad848669bf6d7069c94f505-medium_2x.webp',
                price: 5.99,
                orderItem: null,
            },
            {
                id: uuid(),
                title: 'McFlurry KitKat',
                category: 'desserts',
                imgUrl: 'https://www.mcdonalds.sk/uploads/images/products/549-sk/e8e1878b700297379129ac362d50e6b0-medium_2x.webp',
                price: 6.99,
                orderItem: null,
            },
            {
                id: uuid(),
                title: 'McFlurry Lotus',
                category: 'desserts',
                imgUrl: 'https://www.mcdonalds.sk/uploads/images/products/550-sk/2c8832a64522d3a9e63d490897b8950d-medium_2x.webp',
                price: 3.99,
                orderItem: null,
            },
            {
                id: uuid(),
                title: 'McSundae',
                category: 'desserts',
                imgUrl: 'https://www.mcdonalds.sk/uploads/images/products/45-sk/df6331174478949e171b82482b2e7228-medium_2x.webp',
                price: 4.99,
                orderItem: null,
            },
        ];

        for (const product of products) {
            await this.productService.create(product);
        }

        console.log('Products have been seeded');
    }

    async clear() {
        await this.productService.clear();
        console.log('Products have been cleared');
    }
}
