import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch("/brands.json")
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router