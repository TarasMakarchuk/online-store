import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../prisma.service';
import { Product } from '@prisma/client';
import { ReviewService } from '../review/review.service';
import { sortType } from './types/sort-type';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService, private reviewService: ReviewService) {}

  async findAll(
    type?: sortType,
    take?: number,
    skip?: number,
  ): Promise<Product[]> {
    const DEFAULT_TAKE = 100;
    const DEFAULT_SKIP = 0;

    if(!take || !skip) {
      take = DEFAULT_TAKE;
      skip = DEFAULT_SKIP;
    }

    const isSortByPrice = type === 'high-to-low' || type === 'low-to-high';
    const isAsc = type === 'oldest' || type === 'low-to-high';
    const orderBy = {
      [isSortByPrice ? 'price' : 'createdAt']: isAsc ? 'asc' : 'desc',
    };

    return this.prisma.product.findMany({
      skip,
      take,
      orderBy,
    });
  }

  async findBySearchTerm(searchTerm?: string): Promise<Product[]> {
    return this.prisma.product.findMany({
      where: {
        OR: [
          {
            name: {
              contains: searchTerm,
              mode: 'insensitive'
            }
          },
          {
            description: {
              contains: searchTerm,
              mode: 'insensitive'
            }
          }
        ]
      }
    });
  }

  async findById(id: number): Promise<Product | number> {
    const product = await this.prisma.product.findUnique({
      where: {
        id
      },
      include: {
        reviews: true,
      },
    });
    if (!product) throw new NotFoundException(`Product with id: ${id} not found`);

    const averageRating = await this.reviewService.getAverageReviewRatingByProductId(id);

    return { ...product, ...averageRating };
  }

  async findBySlug(slug: string): Promise<Product> {
    const product = await  this.prisma.product.findUnique({ where: { slug } });
    if (!product) throw new NotFoundException(`Product with slug: ${slug} not found`);
    return product;
  }

  async findRelatives(currentProductId: number): Promise<Product[]> {
    const product = await this.prisma.product.findMany({
      where: {
        id: {
          not: currentProductId,
        }
      }
    });
    if (!product) throw new NotFoundException(`Product with id: ${currentProductId} not found`);
    return product;
  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    return this.prisma.product.create({
      data: { ...createProductDto },
    });
  }

  async update(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
    const product = await this.prisma.product.findUnique({ where: { id }});
    if (!product) throw new NotFoundException(`Product with id: ${id} not found`);
    return this.prisma.product.upsert({
      create: { ...product },
      update: { ...updateProductDto },
      where: { id },
    });
  }

  async remove(id: number): Promise<void> {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) throw new NotFoundException(`Product with id: ${id} not found`);
    await this.prisma.product.deleteMany({ where: { id } });
  }
}
