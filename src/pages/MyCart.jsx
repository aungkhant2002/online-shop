import Container from "../components/Container.jsx";
import BreadCrumb from "../components/BreadCrumb.jsx";
import CartSection from "../components/CartSection.jsx";

export default function MyCart() {
    return (
        <Container className="">
            <div className="p-5">
                <BreadCrumb currentPageTitle="My Cart"></BreadCrumb>
                <CartSection/>
            </div>
        </Container>
    )
}