import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../prisma.service';
import { Product } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async findAll(searchTerm?: string): Promise<Product[] | undefined> {
    return this.prisma.product.findMany(searchTerm ? {
      where: {
        OR: [
          {
            name: {
              contains: searchTerm,
            },
          },
          {
            description: {
              contains: searchTerm,
            },
          },
        ],
      }
    } : undefined);
  }

  async findById(id: number): Promise<Product> {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) throw new NotFoundException(`Product with id: ${id} not found`);
    return product;
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
