import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { PrismaService } from './prisma.service';

async function bootstrap() {
  const PORT = process.env.API_PORT || 8080;

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app)

  await app.listen(PORT, () => {
    Logger.log(`http://localhost:${PORT}`, `Server start on host`);
  });
}

bootstrap();
