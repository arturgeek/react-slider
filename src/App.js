import './App.css';
import { useEffect } from 'react';
import SliderContainer from './components/SliderContainer/SliderContainer';
import ControlButton from './components/ControlButton/ControlButton';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchSlides, moveSlide } from './slices/dataSlice';

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
    dispatch( moveSlide(1) );
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

  const handleNextSlideButton = () => {
    dispatch( moveSlide(1) );
  }

  const handlePreviousSlideButton = () => {
    dispatch( moveSlide(-1) );
  }
  
  return (
      <div className="App">
        <SliderContainer slides={slides} />
        <ControlButton span="Previous" action={ handlePreviousSlideButton }></ControlButton>
        <ControlButton span="Next" action={ handleNextSlideButton }></ControlButton>
      </div>
    );
  }
  
  export default App;
  