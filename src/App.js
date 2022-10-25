import './App.css';
import { useEffect, useState, useReducer } from 'react';
import { getSlides } from './API/SlidersData';
import SliderContainer from './components/SliderContainer/SliderContainer';
import { SliderContexts } from './Context/SliderContexts';
import { sliderActionsReducer } from './Reducers/SliderReducer';

function App() { 
  
  const [slides, setSlides] = useState([]);
  const [acitveSlide, setActiveSlide] = useState("");
  let sliderInterval = null;

  const [currentSlideIndex, dispatch] = useReducer(sliderActionsReducer, 0);
  
  useEffect( () => {
    const slides = getSlides();
    setSlides(slides);
    setActiveSlide(slides[ currentSlideIndex ].imageUrl)
    
    /*
    Everytime the component re renders it requires clear the 
    interval to avoid running more than once
    */
    clearInterval(sliderInterval);
    sliderInterval = setInterval( () => {
      dispatch({type: "NextSlide"})
    }, 2000);
  }, [] );

  
  return (
    <SliderContexts.Provider value={acitveSlide}>
    <div className="App">
    <SliderContainer slides={slides} />
    </div>
    </SliderContexts.Provider>
    );
  }
  
  export default App;
  