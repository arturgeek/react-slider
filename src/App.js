import './App.css';
import { useEffect, useState, useReducer } from 'react';
import { getSlides } from './API/SlidersData';
import SliderContainer from './components/SliderContainer/SliderContainer';
import { SliderContexts } from './Context/SliderContexts';

function App() { 
  
  const [slides, setSlides] = useState([]);
  const [acitveSlide, setActiveSlide] = useState("");
  let sliderInterval = null;

  const sliderActionsReducer = (currentSlideIndex, action) => {
    switch(action.type) {
      case "NextSlide":

        if( currentSlideIndex >= slides.length ){
          currentSlideIndex = 0;
        }
        setActiveSlide(slides[ currentSlideIndex ].imageUrl)
        return currentSlideIndex + 1;

      case "SliderHovered":
        return {
          ...sliderState, 
          sliderHovered: true
        };

      default:
        return [
          ...sliderState
        ];
    }
  }

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
  