import { useEffect } from "react";

export const UseEffect = () => {
    useEffect(() => {
        //? fetch, eventListener, setInterval, setTimeout
        console.log("This is useEffect");
        const intervalId = setInterval(() => {
            console.log("This will run every second!");
        }, 100);
        setInterval(() => {
            clearInterval(intervalId);
        }, 200);
    }, []);
    // dependency array: we can define for which parameter the function should be re-render
    return <div>UseEffect</div>;
};
