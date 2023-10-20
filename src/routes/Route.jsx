import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AddProduct from "../pages/AddProduct";
import Products from "../pages/Products";
import UpdateProduct from "../pages/UpdateProduct";
import ProductDetail from "../pages/ProductDetail";
import MyCart from "../pages/MyCart";
import Error from "../pages/Error";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch("/brands.json")
            },
            {
                path: '/products/:id',
                element: <Products></Products>
            },
            {
                path: '/addProduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: '/updateProduct/:id',
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({ params }) => fetch(`https://auto-hub-server-3dj7qilkx-muhammad-minhajul-alams-projects.vercel.app/products/${params.id}`)
            },
            {
                path: '/productDetail/:id',
                element: <PrivateRoute><ProductDetail></ProductDetail></PrivateRoute>,
                loader: ({ params }) => fetch(`https://auto-hub-server-3dj7qilkx-muhammad-minhajul-alams-projects.vercel.app/products/${params.id}`)
            },
            {
                path: '/myCart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: () => fetch('https://auto-hub-server-3dj7qilkx-muhammad-minhajul-alams-projects.vercel.app/myCart')
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default router