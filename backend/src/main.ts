import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { corsOptions } from './cors';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors(corsOptions);
    app.setGlobalPrefix('api');
    await app.listen(8000);
}
bootstrap();
