import "./index.css";
import {createRoot} from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import router from "./routes/router.jsx";

const root = document.querySelector("#root");
createRoot(root).render(<RouterProvider router={router}/>);