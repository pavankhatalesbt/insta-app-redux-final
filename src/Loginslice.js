import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

export const Loginslice = createSlice({
  name: "Login",
  initialState,
  reducers: {
    loadingaction: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {loadingaction} =
  Loginslice.actions;

export default Loginslice.reducer;
