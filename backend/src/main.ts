import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ProductSeedService } from './product/product-seed.service';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const productSeedService = app.get(ProductSeedService);
    await productSeedService.seed();
    app.setGlobalPrefix('api');
    await app.listen(8080);
}
bootstrap();
