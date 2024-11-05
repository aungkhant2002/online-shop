import Container from "../components/Container.jsx";
import BreadCrumb from "../components/BreadCrumb.jsx";

export default function MyCart() {
    return (
        <Container>
            <div className="p-5">
                <BreadCrumb currentPageTitle="My Cart"></BreadCrumb>

            </div>
        </Container>
    )
}