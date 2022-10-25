import "./Slide.css";
import { useState, useContext } from "react";
import { ActiveSlideContext } from "../../Context/SliderContexts";

const Slide = ( slideData ) => {

    const [hover, setHover] = useState(false);
    const [background, setBackground] = useState(slideData.imageUrl);
    const acitveSlide = useContext(ActiveSlideContext);

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
                backgroundImage: `url("${background}")`
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