import { createSlice } from "@reduxjs/toolkit";
import { fetchGoods } from "./operations";

const initialState = {
  goods: [],
};

const slice = createSlice({
  name: "goods",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGoods.fulfilled, (state, action) => {
      state.goods = action.payload;
    });
  },
});

export const goodsReducer = slice.reducer;
