import ProductCard from "./ProductCard.jsx";
import Container from "./Container.jsx";
import useProductStore from "../store/useProductStore.js";

export default function ProductSection() {
    const {products} = useProductStore();
    return (
        <div className="px-5 mb-5">
            <Container>
                <p className="text-gray-500 mb-2">Available Product Card</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {products.map((product) => <ProductCard key={product.id} product={product}/>)}
                </div>
            </Container>
        </div>
    )
}