import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import MyCart from "../pages/MyCart.jsx";
import ProductDetail from "../pages/ProductDetail.jsx";
import MainLayout from "../components/MainLayout.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "about",
                element: <About/>,
            },
            {
                path: "my-cart",
                element: <MyCart/>,
            },
            {
                path: "product-detail",
                element: <ProductDetail/>,
            }
        ]
    }
]);

export default router;