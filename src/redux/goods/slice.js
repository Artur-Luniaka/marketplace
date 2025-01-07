import { createSlice } from "@reduxjs/toolkit";
import { fetchAllGoods, fetchTopSalesGoods } from "./operations";

const initialState = {
  goods: [],
};

const slice = createSlice({
  name: "goods",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTopSalesGoods.fulfilled, (state, action) => {
      state.goods = action.payload;
    });
    builder.addCase(fetchAllGoods.fulfilled, (state, action) => {
      state.goods = action.payload;
    });
  },
});

export const goodsReducer = slice.reducer;
