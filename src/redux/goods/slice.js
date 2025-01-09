import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllGoods,
  fetchSingleGood,
  fetchTopSalesGoods,
} from "./operations";

const initialState = {
  goods: [],
  item: null,
  loader: false,
  error: null,
};

const handlePending = (state) => {
  state.loader = true;
};

const handleRejected = (state, action) => {
  state.loader = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: "goods",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchTopSalesGoods.pending, handlePending)
      .addCase(fetchTopSalesGoods.fulfilled, (state, action) => {
        state.loader = false;
        state.goods = action.payload;
      })
      .addCase(fetchTopSalesGoods.rejected, handleRejected)
      .addCase(fetchAllGoods.fulfilled, (state, action) => {
        state.loader = false;
        state.goods = action.payload;
      })
      .addCase(fetchAllGoods.pending, handlePending)
      .addCase(fetchAllGoods.rejected, handleRejected)
      .addCase(fetchSingleGood.pending, handlePending)
      .addCase(fetchSingleGood.rejected, handleRejected)
      .addCase(fetchSingleGood.fulfilled, (state, action) => {
        state.loader = false;
        state.item = action.payload;
      });
  },
});

export const goodsReducer = slice.reducer;
