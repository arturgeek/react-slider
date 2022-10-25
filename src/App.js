import './App.css';
import { useEffect, useState, createContext } from 'react';
import { getSliders } from './API/SlidersData';
import SliderContainer from './components/SliderContainer/SliderContainer';
import { ActiveSlideContext } from './Context/SliderContexts';

function App() { 

  const [slides, setSlides] = useState([]);
  const [acitveSlide, setActiveSlide] = useState(0);
  
  useEffect( () => {
    const slides = getSliders();
    setSlides(slides);
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
  