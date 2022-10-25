import "./Slide.css";
import { useState, useContext } from "react";
import { SliderContexts } from "../../Context/SliderContexts";

const Slide = ( slideData ) => {

    const [hover, setHover] = useState(false);
    const [background, setBackground] = useState(slideData.imageUrl);
    const acitveSlide = useContext(SliderContexts);

    const handleOnMouseOver = () => {
        setHover(true);
        const hoverImageUrl = slideData.hoverImageUrl ?? slideData.imageUrl;
        setBackground(hoverImageUrl);
    }

    const handleOnMOuseLeave = () => {
        setHover(false);
        setBackground(slideData.imageUrl);
    }

    return slideData.imageUrl ? <div 
            className={`slide ${hover ? "hover" : ""}`}
            key={slideData.imageUrl}
            style={{
                backgroundImage: `url("${background}")`,
                display: `${acitveSlide === slideData.imageUrl ? "block" : "none"}`
            }}
            onMouseOver={handleOnMouseOver}
            onMouseLeave={handleOnMOuseLeave}
        >
            <div>
            linkSpan: {slideData.linkSpan}
            <br/>
            linkUrl: {slideData.linkUrl}
            <br/>
            acitveSlide: {acitveSlide}
            </div>        
    </div> : null;
};

export default Slide;