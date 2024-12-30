import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiGoods = axios.create({
  baseURL: "https://dummyjson.com",
});

export const fetchGoods = createAsyncThunk(
  "goods/fetchAll",
  async (_, thunkApi) => {
    try {
      const response = await apiGoods("/products?limit=9");
      return response.data.products;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
export const fetchMoreGoods = createAsyncThunk(
  "goods/fetchMoreGoods",
  async (skip, thunkApi) => {
    try {
      const response = await apiGoods(`/products?limit=9&skip=${skip}`);
      return response.data.products;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
