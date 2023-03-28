import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const PORT = process.env.API_PORT || 8080;

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');
  await app.listen(PORT, () => {
    Logger.log(`http://localhost:${PORT}`, `Server start on host`);
  });
}

bootstrap();
