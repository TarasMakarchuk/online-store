import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ReviewService } from './review.service';
import { Review } from '@prisma/client';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  async create(@Body() createReviewDto: CreateReviewDto): Promise<Review> {
    return this.reviewService.create(createReviewDto);
  }

  @Get()
  async findAll(): Promise<Review[]> {
    return this.reviewService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Review> {
    return this.reviewService.findById(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateReviewDto: UpdateReviewDto): Promise<Review> {
    return this.reviewService.update(+id, updateReviewDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.reviewService.remove(+id);
  }
}
