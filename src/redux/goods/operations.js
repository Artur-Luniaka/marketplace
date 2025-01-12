import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiGoods = axios.create({
  baseURL: "https://dummyjson.com",
});

export const fetchTopSalesGoods = createAsyncThunk(
  "goods/fetchTopSales",
  async (_, thunkApi) => {
    try {
      const response = await apiGoods("/products?limit=0");
      return response.data.products.filter((item) => item.rating >= 4.9);
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
export const fetchAllGoods = createAsyncThunk(
  "goods/fetchAllGoods",
  async (_, thunkApi) => {
    try {
      const response = await apiGoods("/products?limit=10");
      return response.data.products;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const fetchNextGoods = createAsyncThunk(
  "goods/fetchNextGoods",
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const skipped = state.goods.skipped;
      const response = await apiGoods(`/products?limit=10&skip=${skipped}`);
      return response.data.products;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const fetchSingleGood = createAsyncThunk(
  "goods/fetchSingleGoods",
  async (id, thunkApi) => {
    try {
      const response = await apiGoods(`/products/${id}`);
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
