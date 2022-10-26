import { createSlice } from "@reduxjs/toolkit";
import { getSlides } from "../API/SlidersData";
import { useDispatch } from 'react-redux';
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    slides: [],
    acitveSlide: "",
    currentSlideIndex: 0,
    sliderHovered: false
}

export const fetchSlides = createAsyncThunk(
    "data/fetchSlides",
    async (_, {dispatch}) => {
        //dispatch( setLoading(true));
        const slides = await getSlides();
        dispatch( setSlides(slides) );
        dispatch( setActiveSlide() )
        //dispatch( setLoading(false));
    }
);

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setSlides: (state, action) => {
            state.slides = action.payload;
        },
        setCurrentSlideIndex: (state, action) => {
            state.currentSlideIndex = action.payload
        },
        setActiveSlide: (state, action) => {
            state.acitveSlide = state.slides[ state.currentSlideIndex ]
        }
    }
});

export const { setSlides, setCurrentSlideIndex, setActiveSlide } = dataSlice.actions;
export default dataSlice.reducer;