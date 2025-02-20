import ProductCard from "./ProductCard.jsx";
import Container from "./Container.jsx";
import useProductStore from "../store/useProductStore.js";
import useCategoryStore from "../store/useCategoryStore.js";

export default function ProductSection() {
    const {products} = useProductStore();
    const {categories} = useCategoryStore();
    const currentCategory = categories.find(el => el.isActive === true);
    return (
        <div className="px-5 mb-5">
            <Container>
                <p className="text-gray-500 mb-2">Available Product Card</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {products.filter((el) => currentCategory.name === "All" || el.category === currentCategory.name).map((product) => <ProductCard key={product.id} product={product}/>)}
                </div>
            </Container>
        </div>
    )
}