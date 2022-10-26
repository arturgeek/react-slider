import './App.css';
import { useEffect, useState, useReducer } from 'react';
import SliderContainer from './components/SliderContainer/SliderContainer';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchSlides, nextSlide } from './slices/dataSlice';

function App() { 

  const slides = useSelector( (state) => state.data.slides, shallowEqual);
  const currentSlideIndex = useSelector( (state) => state.data.currentSlideIndex );

  const dispatch = useDispatch();
  
  let sliderInterval = null;

  const processInterval = ( ) => {
    dispatch( nextSlide() );
  }

  useEffect( () => {
    dispatch( fetchSlides() );
    /*
    Everytime the component re renders it requires clear the 
    interval to avoid running more than once
    */
    clearInterval(sliderInterval);
    sliderInterval = setInterval( () => {
      processInterval();
    }, 2000);
    
  }, [] );
  
  return (
      <div className="App">
        <SliderContainer slides={slides} />
      </div>
    );
  }
  
  export default App;
  