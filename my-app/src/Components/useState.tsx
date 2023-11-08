import { useEffect, useState } from "react";

const _useState = () => {
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

export default _useState;
