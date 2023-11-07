import { count } from "console";
import "./App.css";
import Button from "./button";
import Counter from "./counter/useReducer";
import FormSubmit from "./Components/FormSubmit"; 
import Nav from "./Components/Nav";


function App() {
    return (
        <div className="App">
            {/* <Button content = 'Increment'/>
            <Button content = 'Decrement'/> */}
            {/* <Counter />
            <Counter /> */}
            <Nav />
            <FormSubmit />
        </div>
    );
}

export default App;
