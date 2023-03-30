import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from '@prisma/client';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.create(createProductDto);
  }

  @Get()
  async findAll(
    @Query('searchTerm') searchTerm?: string,
    @Query('sortingField') sortingField?: string,
    @Query('sortingDirection') sortingDirection?: string,
    @Query('take') take?: string,
    @Query('skip') skip?: string,
  ): Promise<Product[]> {
    return this.productService.findAll(searchTerm, sortingField, sortingDirection, +take, +skip);
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
