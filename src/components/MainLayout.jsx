import Footer from "./Footer.jsx";
import {Outlet} from "react-router-dom";
import Header from "./Header.jsx";

const MainLayout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default MainLayout;