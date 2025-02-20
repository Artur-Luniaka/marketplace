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
  async (category = null, thunkApi) => {
    try {
      if (category === null) {
        const response = await apiGoods(`/products?limit=0`);
        return response.data.products;
      }
      if (category !== null) {
        const response = await apiGoods(
          `/products/category/${category}?limit=0`
        );
        return response.data.products;
      }
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
export const fetchALLCategory = createAsyncThunk(
  "goods/fetchALLCategory",
  async (id, thunkApi) => {
    try {
      const response = await apiGoods("/products/categories");
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
