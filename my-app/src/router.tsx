import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/Home",
        element: <Home />,
    },
    {
        path: "/About",
        element: <About />,
    },
    {
        path: "/Contact",
        element: <Contact />,
    },
    
]);

export default router;