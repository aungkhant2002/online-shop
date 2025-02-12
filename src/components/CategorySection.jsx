import CategoryButton from "./CategoryButton.jsx";
import Container from "./Container.jsx";
import useCategoryStore from "../store/useCategoryStore.js";

export default function CategorySection() {
    const title = "Product Categories";
    const {categories} = useCategoryStore();
    return (
        <section id="categorySection" className="p-5">
            <Container>
                <p className="text-gray-500 mb-2">{title}</p>
                <div className="flex overflow-scroll category-button-group">
                    {categories.map(category => (
                        <CategoryButton key={category.id} category={category}/>
                    ))}
                </div>
            </Container>
        </section>
    )
}