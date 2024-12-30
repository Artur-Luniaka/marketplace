import { createSlice } from "@reduxjs/toolkit";
import { fetchGoods, fetchMoreGoods } from "./operations";

const initialState = {
  goods: [],
  skip: 9,
};

const slice = createSlice({
  name: "goods",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchGoods.fulfilled, (state, action) => {
        state.goods = action.payload;
      })
      .addCase(fetchMoreGoods.fulfilled, (state, action) => {
        state.goods.push(...action.payload);
        state.skip += 9;
      });
  },
});

export const goodsReducer = slice.reducer;
