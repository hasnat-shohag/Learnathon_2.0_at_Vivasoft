import { createContext, useState } from "react";

export const CounterContext = createContext(0);

const CounterContextProvider = ({children}) => {
    const [count, setCount] = useState(0);
    const handleCount = () => {
        setCount((prev) => prev + 1);
    };
    return (
        <CounterContext.Provider value={{ count, handleCount }}>
            {children}
        </CounterContext.Provider>
    );
};
export default CounterContextProvider;
