import { configureStore } from "@reduxjs/toolkit";
// import HomeSlice from "../Slice/HomeSlice";
import MovieinfosSlice from "../Slice/Movieinfoslice";
import LoginSlice from "../Slice/Loginslice";


export const Store = configureStore({
    reducer: {
        Login: LoginSlice,
        // Home: HomeSlice,
        infopage:MovieinfosSlice
    }
})