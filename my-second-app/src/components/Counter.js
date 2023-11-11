import React, { useContext } from "react";
import CounterContextProvider from "./CounterContext";

const Counter = () => {
    const CountContext = useContext(CounterContextProvider);
    console.log(CountContext);
    return <div>Counter</div>;
};
export default Counter;
