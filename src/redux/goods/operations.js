import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiGoods = axios.create({
  baseURL: "https://dummyjson.com",
});

export const fetchGoods = createAsyncThunk(
  "goods/fetchAll",
  async (_, thunkApi) => {
    try {
      const response = await apiGoods("/products?limit=0");
      return response.data.products.filter((item) => item.rating >= 4.9);
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
