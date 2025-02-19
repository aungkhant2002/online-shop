import Footer from "./Footer.jsx";
import {Outlet} from "react-router-dom";
import Header from "./Header.jsx";
import {Toaster} from "react-hot-toast";

const MainLayout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
            <Toaster/>
        </>
    )
}

export default MainLayout;