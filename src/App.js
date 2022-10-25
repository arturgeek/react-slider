import './App.css';
import { useEffect, useState } from 'react';
import { getSliders } from './API/SlidersData';
import SliderContainer from './components/SliderContainer/SliderContainer';

function App() { 

  const [slides, setSlides] = useState([]);
  
  useEffect( () => {
    const slides = getSliders();
    setSlides(slides);
  }, [] );

  return (
    <div className="App">
      <SliderContainer slides={slides} />
    </div>
    );
  }
  
  export default App;
  