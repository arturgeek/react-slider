import slideUrl1 from "../../static/slider-1.jpg";
import slideUrl2 from "../../static/slider-2.jpg";
import slideUrl3 from "../../static/slider-3.jpg";
import slideUrl4 from "../../static/slider-4.jpg";
import hoverImageUrl from "../../static/hover.jpg";

const staticSliders = [
    {
        imageUrl: slideUrl1,
        hoverImageUrl: hoverImageUrl, 
        linkSpan: "", 
        linkUrl: ""
    },
    {
        imageUrl: slideUrl2,
        hoverImageUrl: hoverImageUrl, 
        linkSpan: "", 
        linkUrl: ""
    },
    {
        imageUrl: slideUrl3,
        hoverImageUrl: hoverImageUrl, 
        linkSpan: "", 
        linkUrl: ""
    },
    {
        imageUrl: slideUrl4,
        hoverImageUrl: hoverImageUrl, 
        linkSpan: "", 
        linkUrl: ""
    },
]


export const getSliders = () => {
    return staticSliders
}