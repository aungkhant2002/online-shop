import Container from "./Container.jsx";

export default function Header() {
    return (
        <header className="p-5">
            <Container>
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold">Online Shop</h1>
                    <button className="border border-black px-4 py-2 relative">My Cart
                        <span
                            className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 inline-block bg-red-600 text-white text-xs px-2 py-1">1</span>
                    </button>
                </div>
            </Container>
        </header>
    )
}