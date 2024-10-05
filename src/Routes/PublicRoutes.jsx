import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
    },
    {
        path: 'log-in',
        element: <LogIn></LogIn>
    },
    {
        path: 'register',
        element: <Register></Register>
    }
])

export default router;