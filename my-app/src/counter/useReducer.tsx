import { useReducer } from "react";
import "./counter.css";

const initialState = { count: 0 };
const reducer = (state: { count: number; }, action: { type: any; }) => {
    switch (action.type) {
        case "Reset":
            return { count: 0 };
        case "Increment":
            return { count: state.count + 1 };
        case "Decrement":
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
};

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <>
            <br/>Count: {state.count} <br/>
            <button className="btn" onClick={() => dispatch({type: "Increment"})}>+</button>
            <button className="btn" onClick={() => dispatch({type: "Decrement"})}>-</button>
            <button className="btn" onClick={() => dispatch({type: "Reset"})}>Reset</button>
        </>
    );
};
export default Counter;