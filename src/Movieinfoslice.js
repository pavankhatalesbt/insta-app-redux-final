import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieinfo:[]
};

export const Movieinfoslice = createSlice({
  name: "infopage",
  initialState,
  reducers: {
    movieinfoaction: (state, action) => {
      state.movieinfo = action.payload;
    },
  },
});

export const {movieinfoaction} =Movieinfoslice.actions;

export default Movieinfoslice.reducer;
