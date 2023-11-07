import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import User from "./Components/User";
import Users from "./Components/Users";

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
    {
        path: "/User/:id",
        element: <User />,
    },
    {
        path: "/Users",
        element: <Users />,
    },
]);

export default router;
