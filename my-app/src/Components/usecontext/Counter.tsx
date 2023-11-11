import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";

const Counter = () => {
    const countContext = useContext(CounterContext);
    
    if (!countContext) {
        throw new Error("Counter must be used within a CounterContextProvider");
    }

    const { count, handleCount } = countContext;

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleCount}>Increment</button>
        </div>
    );
};

export default Counter;