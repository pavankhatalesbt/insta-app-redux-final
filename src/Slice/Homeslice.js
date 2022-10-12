import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    page:1,
}




export const HomeSlice = createSlice({
    name: "Home",
    initialState,
    reducers: {
        pageAction: (state, action) => {
            state.page = action.payload
        },
        pagePlus: (state) => {
            state.page += 1
        },
        pageMinus: (state) => {
            state.page -= 1
        }
    }

})

export const { pageAction, pagePlus, pageMinus } = HomeSlice.actions

export default HomeSlice.reducer