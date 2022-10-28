import slideUrl1 from "../../static/slider-1.jpg";
import slideUrl2 from "../../static/slider-2.jpg";
import slideUrl3 from "../../static/slider-3.jpg";
import slideUrl4 from "../../static/slider-4.jpg";
import hoverImageUrl from "../../static/hover.jpg";
import SlideData  from "../Model/SlideData";

const staticSliders = [
    new SlideData(
        slideUrl1,
        hoverImageUrl, 
        "Ir al enlace", 
        "#enlace"
    ),
    new SlideData(
        slideUrl2,
        hoverImageUrl, 
        "", 
        ""
    ),
    new SlideData(
        slideUrl3,
        hoverImageUrl, 
        "", 
        ""
    ),
    new SlideData(
        slideUrl4,
        hoverImageUrl, 
        "", 
        ""
    )
]


export const getSlides = () => {
    return staticSliders
}