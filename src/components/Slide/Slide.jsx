import "./Slide.css";
import { useState } from "react";
import { useSelector } from 'react-redux';
import { setSlideHovered } from "../../slices/dataSlice";
import { useDispatch } from 'react-redux';

const Slide = ({ imageUrl, hoverImageUrl, linkSpan, linkUrl}) => {

    const [hover, setHover] = useState(false);
    const [background, setBackground] = useState(imageUrl);
    const acitveSlide = useSelector( (state) => state.data.acitveSlide );
    const sliderHovered = useSelector( (state) => state.data.sliderHovered );
    const dispatch = useDispatch();
    
    const handleOnMouseOver = () => {
        setHover(true);
        dispatch( setSlideHovered(true) );
        setBackground( hoverImageUrl ?? imageUrl );
    }

    const handleOnMOuseLeave = () => {
        setHover(false);
        dispatch( setSlideHovered(false) );
        setBackground(imageUrl);
    }

    return imageUrl ? <div 
            className={`slide ${hover ? "hover" : ""}`}
            key={imageUrl}
            style={{
                backgroundImage: `url("${background}")`,
                display: `${acitveSlide.imageUrl === imageUrl ? "block" : "none"}`
            }}
            onMouseOver={handleOnMouseOver}
            onMouseLeave={handleOnMOuseLeave}
        >
            <div>
            linkSpan: {linkSpan.toString()}
            <br/>
            linkUrl: {linkUrl.toString()}
            <br/>
            acitveSlide: {acitveSlide ? acitveSlide.imageUrl.toString() : ""}
            </div>        
    </div> : null;
};

export default Slide;