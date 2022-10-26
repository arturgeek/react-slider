import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
};

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        nextSlide: (state, action) => {
            //state.loading = action.payload;
            console.log("next slide");
        },
        previousSlide: (state, action) => {
            //state.loading = action.payload;
            console.log("previous slide");
        },
        pauseInterval: (state, action) => {
            //state.loading = action.payload;
            console.log("pause interval");
        }
    }
});

export const { setLoading } = uiSlice.actions;
export default uiSlice.reducer;