import { useState } from "react";
import "./button.css";

interface ButtonPropsTypes {
    content: string;
}

const Button = (props: ButtonPropsTypes) => {
    let [count, setCount] = useState<number>(5);
    const { content } = props;

    return (
        <button
            onClick={() => {
                content === "Increment"
                    ? setCount(count + 1)
                    : setCount(count - 1);
            }}
        >
            {content} {count}
        </button>
    );
    // <button className= '_style' onClick={(content === 'Increment' ? Increment : Decrement)}>{content} {count} </button>

    //! How two buttons share same 'count' variable value (not forming closer for a specific variable)
};
// const Button = (props: ButtonPropsTypes)=>{
//     const [count, setCount] = useState<number>(5);
//     const {content} = props;

//     const Increment =  () => {
//         setCount(count+1);
//     }
//     const Decrement =  () => {
//         (count-1 >= 0 ? setCount(count-1): alert("Negative Count Not allowed"));
//     }

//     return <button className= '_style' onClick={(content === 'Increment' ? Increment : Decrement)}>{content} {count} </button>

//     //! How two buttons share same variable value (not forming closer for a specific variable)
// }
export default Button;
