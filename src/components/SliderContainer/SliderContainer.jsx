import "./SliderContainer.css";
import Slide from "../Slide/Slide";

const SliderContainer = ({slides}) => {
    return <div className="slider-container">
        {
            slides.map( (slideData, index) => {
                return <Slide 
                    key={index}
                    linkUrl={slideData.linkUrl}
                    imageUrl={slideData.imageUrl}
                    hoverImageUrl={slideData.hoverImageUrl}
                    linkSpan={slideData.linkSpan}
                    >    
                </Slide>;
            })
        }
    </div>
    
}

export default SliderContainer;