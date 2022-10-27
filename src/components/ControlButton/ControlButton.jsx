const ControlButton = ( {span, action} ) => {
    return <button onClick={action} >
        {span}
    </button>;
};

export default ControlButton;