import { count } from "console";
import "./App.css";
import Button from "./button";
import Counter from "./counter/useReducer";
import FormSubmit from "./Components/FormSubmit"; 
import Nav from "./Components/Nav";
import _useState from "./Components/useState";
import { _useEffect } from "./Components/_useEffect";

function App() {
    return (
        <div className="App">
            {/* <Button content = 'Increment'/>
            <Button content = 'Decrement'/> */}
            {/* <Counter />
            <Counter /> */}
            <Nav />
            <FormSubmit />
            <_useState />
            {/* <_useEffect /> */}
        </div>
    );
}

export default App;
