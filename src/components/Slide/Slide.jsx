import "./Slide.css";
import { useState } from "react";

const Slide = ( slideData ) => {

    const [hover, setHover] = useState(false);
    const [background, setBackground] = useState(slideData.imageUrl);

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
        <br/>
        linkSpan: {slideData.linkSpan}
        <br/>
        linkUrl: {slideData.linkUrl}
    </div> : null;
};

export default Slide;