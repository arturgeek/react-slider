import './App.css';
import { useEffect, useState, useReducer } from 'react';
import { getSlides } from './API/SlidersData';
import SliderContainer from './components/SliderContainer/SliderContainer';
import { ActiveSlideContext } from './Context/SliderContexts';

function App() { 
  
  const [slides, setSlides] = useState([]);
  const [acitveSlide, setActiveSlide] = useState("");
  let sliderInterval = null;

  const sliderActionsReducer = (currentSlideIndex, action) => {
    switch(action.type) {
      case "NextSlide":

        console.log(currentSlideIndex, slides.length);
        if( currentSlideIndex >= slides.length ){
          currentSlideIndex = 0;
        }
        console.log(currentSlideIndex);
        setActiveSlide(slides[ currentSlideIndex ].imageUrl)
        
        return currentSlideIndex + 1;
      default:
        return currentSlideIndex;
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
    <ActiveSlideContext.Provider value={acitveSlide}>
    <div className="App">
    <SliderContainer slides={slides} />
    </div>
    </ActiveSlideContext.Provider>
    );
  }
  
  export default App;
  