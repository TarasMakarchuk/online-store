import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
	name?: string;
	description?: string;
	slug?: string;
	price?: number;
	images?: string[];
}
