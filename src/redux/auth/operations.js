// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const apiGoods = axios.create({
//   baseURL: "https://dummyjson.com",
// });

// export const fetchGoods = createAsyncThunk(
//   "goods/fetchAll",
//   async (_, thunkApi) => {
//     try {
//       const response = await apiGoods("/products");
//       return response.data.products;
//     } catch (e) {
//       return thunkApi.rejectWithValue(e.message);
//     }
//   }
// );
