import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { ProductSeedService } from '../product/product-seed.service';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const productSeedService = app.get(ProductSeedService);

    await productSeedService.clear();
    await productSeedService.seed();

    await app.close();
}

bootstrap();
