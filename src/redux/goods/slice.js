import { createSlice } from "@reduxjs/toolkit";
import {
  fetchALLCategory,
  fetchAllGoods,
  fetchSingleGood,
  fetchTopSalesGoods,
} from "./operations";

const initialState = {
  goods: [],
  goodsList: [],
  item: null,
  loader: false,
  error: null,
  firstShowedItem: 0,
  lastShowedItem: 12,
  showFilter: false,
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
  reducers: {
    previousGoods: (state) => {
      state.firstShowedItem -= 12;
      state.lastShowedItem -= 12;
    },
    nextGoods: (state) => {
      state.firstShowedItem += 12;
      state.lastShowedItem += 12;
    },
    countDown: (state) => {
      state.firstShowedItem = 0;
      state.lastShowedItem = 12;
    },
    openFilter: (state) => {
      state.showFilter = true;
    },
    closeFilter: (state) => {
      state.showFilter = false;
    },
  },
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
      .addCase(fetchALLCategory.fulfilled, (state, action) => {
        state.loader = false;
        state.goodsList = action.payload;
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
export const { previousGoods, nextGoods, countDown, openFilter, closeFilter } =
  slice.actions;
