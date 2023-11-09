import { useReducer } from "react";
const reducer = (state: number, action: any) => {
    if (action.type === "increment") return state + action.payload;
    else if (action.type === "decrement") return state - action.payload;
    else return state;
};
export const _useReducer = () => {
    const [count, dispatch] = useReducer(reducer, 0);
    return (
        <>
            <button
                onClick={() => dispatch({ type: "increment", payload: 5 })}
                style={{ padding: "10px", margin: "10px" }}
            >
                Increment
            </button>
            Count: {count}
            <button
                onClick={() => {
                    dispatch({ type: "decrement", payload: 5 });
                }}
                style={{ padding: "10px", margin: "10px" }}
            >
                Decrement
            </button>
        </>
    );
};
