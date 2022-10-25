import "./Slide.css";

const Slide = ( slideData ) => {

    return <div className="slide" key={slideData.imageUrl}>
        imageUrl: {slideData.imageUrl}
        <br/>
        hoverImageUrl: {slideData.hoverImageUrl}
        <br/>
        linkSpan: {slideData.linkSpan}
        <br/>
        linkUrl: {slideData.linkUrl}
    </div>;
};

export default Slide;