import { createContext, useState, ReactNode } from "react";

interface CounterContextType {
  count: number;
  handleCount: () => void;
}

export const CounterContext = createContext<CounterContextType | undefined>(undefined);

interface CounterContextProviderProps {
  children: ReactNode;
}

const CounterContextProvider: React.FC<CounterContextProviderProps> = ({children}) => {
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