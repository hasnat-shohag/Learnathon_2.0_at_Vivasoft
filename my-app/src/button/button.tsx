import { useState } from "react";
import "./button.css";

interface ButtonPropsTypes {
    content: string;
}

const Button = (props: ButtonPropsTypes)=>{
    const [count, setCount] = useState<number>(5);
    const {content} = props;
    console.log(content);
    const Increment =  () => {
        setCount(count+1);
    }
    const Decrement =  () => {
        (count-1 >= 0 ? setCount(count-1): alert("Negative Count Not allowed"));
    }

    return <button className= '_style' onClick={(content === 'Increment' ? Increment : Decrement)}>{content === 'Increment' ? '+':'-'} {count} </button>
}
export default Button;