import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from '@prisma/client';
import { sortType } from './types/sort-type';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.create(createProductDto);
  }

  @Get()
  async findAll(
    @Query('sortType') type?: sortType,
    @Query('take') take?: string,
    @Query('skip') skip?: string,
  ): Promise<Product[]> {
    return this.productService.findAll(type, +take, +skip);
  }

  @Get('search')
  async findBySearchTerm(
    @Query('searchTerm') searchTerm?: string,
  ): Promise<Product[]> {
    return this.productService.findBySearchTerm(searchTerm);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Product | number> {
    return this.productService.findById(+id);
  }

  @Get('slug/:slug')
  async findBySlug(@Param('slug') slug: string): Promise<Product> {
    return this.productService.findBySlug(slug);
  }

  @Get('/relatives/:id')
  async findRelatives(@Param('id') id: string): Promise<Product[]> {
    return this.productService.findRelatives(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto): Promise<Product> {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.productService.remove(+id);
  }
}
