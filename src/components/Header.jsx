import Container from "./Container.jsx";
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <Container>
            <header className="p-5">
                <div className="flex justify-between items-center">
                    <Link to={"/"} className="text-3xl font-bold">Online Shop</Link>
                    <Link to={"/my-cart"} className="border border-black px-4 py-2 relative">My Cart
                        <span
                            className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 inline-block bg-red-600 text-white text-xs px-2 py-1">2</span>
                    </Link>
                </div>
            </header>
        </Container>
    )
}