import { axiosClassic } from '../api/api';
import { IProduct, sortType } from '@/types/product.interface';

const PRODUCTS = '/products';

export const ProductService = {
	async getProducts(type?: sortType) {
		return axiosClassic.get<IProduct[]>(PRODUCTS, {
			params: {
				sortType: type,
			},
		});
	},

	async bySearchTerm(searchTerm: string) {
		return axiosClassic.get<IProduct[]>(`${PRODUCTS}/search`, {
			params: {
				searchTerm
			}
		});
	},

	async byId(id: number) {
		return axiosClassic.get<IProduct>(`${PRODUCTS}/${id}`);
	},

	async bySlug(slug: string) {
		return axiosClassic.get<IProduct>(`${PRODUCTS}/slug/${slug}`);
	},

	async getRelatives(withoutId: number) {
		return axiosClassic.get<IProduct[]>(`${PRODUCTS}/relatives/${withoutId}`);
	},
};
