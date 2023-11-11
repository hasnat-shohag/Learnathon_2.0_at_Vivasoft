import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import CounterContextProvider from "./Components/usecontext/CounterContext";

function App() {
    return (
        <CounterContextProvider>
            <RouterProvider router={router} />
        </CounterContextProvider>
    );
}

export default App;
