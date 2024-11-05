import ProductCard from "./ProductCard.jsx";
import Container from "./Container.jsx";
import products from "../data/products.js";

export default function ProductSection() {
    return (
        <div className="px-5 mb-5">
            <Container>
                <p className="text-gray-500 mb-2">Available Product Card</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
                    {products.map((product) => <ProductCard key={product.id} product={product}/>)}
                </div>
            </Container>
        </div>
    )
}