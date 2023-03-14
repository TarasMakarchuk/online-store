import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICarouselInitialState } from '@/store/carousel/carousel.types';

const initialState: ICarouselInitialState = {
	selectedItemIndex: 0,
};

export const carouselSlice = createSlice({
	name: 'carousel',
	initialState,
	reducers: {
		nextSlide: (state, action: PayloadAction<{ carouselLength: number }>) => {
			if (state.selectedItemIndex !== action.payload.carouselLength - 1) {
				state.selectedItemIndex += 1;
			}
		},

		prevSlide: (state) => {
			if (state.selectedItemIndex > 0) {
				state.selectedItemIndex -= 1;
			}
		},

		selectSlide: (state, action: PayloadAction<number>) => {
			state.selectedItemIndex = action.payload;
		}
	},

});
