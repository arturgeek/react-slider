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
        dispatch( setCurrentSlide(0) )
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
        setCurrentSlide: (state, action) => {
            state.currentSlideIndex = action.payload
            state.acitveSlide = state.slides[ state.currentSlideIndex ]
        },
        setSlideHovered: (state, action) => {
            state.sliderHovered = action.payload;
        },
        nextSlide: (state, action) => {

            if( state.sliderHovered ){
                return;
            }

            let tempCurrentSlideIndex = state.currentSlideIndex;
            tempCurrentSlideIndex++;
            if( tempCurrentSlideIndex >= state.slides.length ){
                tempCurrentSlideIndex = 0;
            }
            state.currentSlideIndex = tempCurrentSlideIndex;
            state.acitveSlide = state.slides[ state.currentSlideIndex ]
        }
    }
});

export const { setSlides, setCurrentSlide, setActiveSlide, nextSlide, setSlideHovered } = dataSlice.actions;
export default dataSlice.reducer;