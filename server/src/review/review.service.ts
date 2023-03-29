import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Review } from '@prisma/client';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Injectable()
export class ReviewService {
	constructor(private prisma: PrismaService) {}

	async findAll(): Promise<Review[]> {
		return this.prisma.review.findMany({
			orderBy: {
				createdAt: 'desc',
			}
		});
	}

	async findById(id: number): Promise<Review> {
		const review = await this.prisma.review.findUnique({ where: { id } });
		if (!review) throw new NotFoundException(`Review with id: ${id} not found`);
		return review;
	}

	async create(createReviewDto: CreateReviewDto): Promise<Review> {
		const { productId } = createReviewDto;
		const product = await this.prisma.product.findUnique({ where: { id: productId } });
		if (!product) throw new NotFoundException(`Can't create review, product with id: ${productId} not found`);
		return this.prisma.review.create({
			data: { ...createReviewDto },
		});
	}

	async update(id: number, updateReviewDto: UpdateReviewDto): Promise<Review> {
		const review = await this.prisma.review.findUnique({ where: { id }});
		if (!review) throw new NotFoundException(`Review with id: ${id} not found`);
		return this.prisma.review.upsert({
			create: { ...review },
			update: { ...updateReviewDto },
			where: { id },
		});
	}

	async remove(id: number): Promise<void> {
		const review = await this.prisma.review.findUnique({ where: { id } });
		if (!review) throw new NotFoundException(`Review with id: ${id} not found`);
		await this.prisma.review.deleteMany({ where: { id } });
	}
}
