function TestComponent(props) {
    return (
        <div>
            <input type="text" value={props.text}></input>
            <button type="button" onClick={() => props.onCounterIncrement()}>Increment</button>
        </div>
    );
};

export default TestComponent;