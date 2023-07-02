import { IProduct } from "@/models/IProduct";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface basketState {
	basket: IProduct[],
	isLoading: boolean;
	error: string;
	count: number
}

const initialState:basketState = {
	basket: [],
	isLoading: false,
	error: '',
	count: 0
}



export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
	AddCart: (state, action: PayloadAction<IProduct>) => {
		state.basket = [...state.basket, action.payload];
	 },
	 RemoveCart: (state, action: PayloadAction<number | string>) => {
		state.basket = state.basket.filter((item) => item.id !== action.payload);
	 },	 
  },
});


export default basketSlice.reducer
