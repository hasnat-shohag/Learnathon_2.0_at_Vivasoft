import { count } from "console";
import "./App.css";
import Button from "./button";
import Counter from "./counter/useReducer";

function App() {
    return (
        <div className="App">
            <Button content = 'Increment'/>
            <Button content = 'Decrement'/>
            <Counter />
        </div>
    );
}

export default App;
