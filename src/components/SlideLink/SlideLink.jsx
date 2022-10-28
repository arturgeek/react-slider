import "./SlideLink.css";

const SlideLink = ( {linkSpan, linkUrl} ) => {
    return <div className="link">
        <a href={linkUrl} target="_blank" >
            {linkSpan}
        </a>
    </div>;
};

export default SlideLink;