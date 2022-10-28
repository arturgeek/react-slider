const ControlButton = ( {buttonClass, buttonSpan, buttonAction} ) => {
    return <button className={buttonClass} onClick={buttonAction} >
        {buttonSpan}
    </button>;
};

export default ControlButton;