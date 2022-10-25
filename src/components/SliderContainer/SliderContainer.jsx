import "./SliderContainer.css";
import Slide from "../Slide/Slide";

const SliderContainer = ({slides}) => {
    return <div className="slider-container">
        {
            slides.map( (slide) => {
                return new Slide(slide);
            })
        }
    </div>
    
}

export default SliderContainer;