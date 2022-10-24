const ControlButton = ( {span, action} ) => {

    const handleAction = () => {
        console.log(action)
    }

    return <button onClick={handleAction()} >
        {{span}}
    </button>;
};

export default ControlButton;