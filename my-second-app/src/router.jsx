import App from './App';
import Counter from './components/Counter'
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/Counter",
        element: <Counter />,
    },
]);
export default router;