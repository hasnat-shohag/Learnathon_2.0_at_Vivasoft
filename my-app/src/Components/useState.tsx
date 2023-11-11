import {useState } from "react";

const UseState = () => {
    const [count, setCount] = useState(0);
    const handleclick = () => {
        setCount((prevState) => prevState + 1);
        setCount((prevState) => prevState + 1);
    };

    return (
        <div style={{ margin: "10px" }}>
            Count: {count} <br />
            <button style={{ margin: "10px" }} onClick={handleclick}>
                Increment
            </button>
        </div>
    );
};

export default UseState;
