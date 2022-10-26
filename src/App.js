import './App.css';
import { useEffect, useState, useReducer } from 'react';
import SliderContainer from './components/SliderContainer/SliderContainer';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchSlides } from './slices/dataSlice';

function App() { 

  const slides = useSelector( (state) => state.data.slides, shallowEqual);
  const dispatch = useDispatch();
  
  let sliderInterval = null;

  useEffect( () => {
    dispatch( fetchSlides() );
    /*
    Everytime the component re renders it requires clear the 
    interval to avoid running more than once
    
    clearInterval(sliderInterval);
    sliderInterval = setInterval( () => {
      dispatch({type: "NextSlide"})
    }, 2000);
    */
  }, [] );
  
  return (
      <div className="App">
        <SliderContainer slides={slides} />
      </div>
    );
  }
  
  export default App;
  