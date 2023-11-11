import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router";
import CounterContextProvider from './components/CounterContext';

function App() {
    return (
        <CounterContextProvider>
            <RouterProvider router={router} />
        </CounterContextProvider>
    );
}

export default App;
