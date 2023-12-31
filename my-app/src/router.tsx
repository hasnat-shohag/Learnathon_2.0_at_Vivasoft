import { createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import User from "./Components/User";
import Users from "./Components/Users";
import Counter from "./Components/usecontext/Counter";

const router = createBrowserRouter([
    {
        path: "/",
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
    {
        path: "/Counter",
        element: <Counter />,
    },
]);

export default router;
