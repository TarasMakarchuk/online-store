import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaService } from '../prisma.service';
import { ReviewService } from '../review/review.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService, PrismaService, ReviewService],
})
export class ProductModule {}
