import './App.css';
import { useEffect, useState, useReducer } from 'react';
import SliderContainer from './components/SliderContainer/SliderContainer';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchSlides, nextSlide } from './slices/dataSlice';

function App( {secondsInterval} ) { 

  const slides = useSelector( (state) => state.data.slides, shallowEqual);
  const sliderHovered = useSelector( (state) => state.data.sliderHovered );
  const interval = secondsInterval * 1000;
  const dispatch = useDispatch();
  
  let sliderInterval = null;

  const processInterval = ( ) => {
    console.log("sliderHovered", sliderHovered);
    if( sliderHovered ){
      return;
    }
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
    }, interval);
    
  }, [] );
  
  return (
      <div className="App">
        <SliderContainer slides={slides} />
      </div>
    );
  }
  
  export default App;
  