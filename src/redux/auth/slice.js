import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLogged: (state, action) => {
      state.isLogged = action.payload;
    },
  },
});
export const { setIsLogged } = slice.actions;
export const authReducer = slice.reducer;
