import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import validationConfig from './config/validation.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe(validationConfig()));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
