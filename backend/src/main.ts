import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { corsOptions } from './config/cors';
import { environment } from './config/environment';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors(corsOptions);
    app.setGlobalPrefix('api');
    await app.listen(environment.port || 8000);
}
bootstrap();
