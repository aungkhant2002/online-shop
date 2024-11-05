import "./index.css";
import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

const root = document.querySelector("#root");
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "about",
        element: <About/>,
    }
]);
createRoot(root).render(<RouterProvider router={router} />);