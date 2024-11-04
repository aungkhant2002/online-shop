import CategoryButton from "./CategoryButton.jsx";

export default function CategorySection() {
    const title = "Product Categories";
    const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"];
    return (
        <section id="categorySection" className="p-5">
            <p className="text-gray-500 mb-2">{title}</p>
            <div className="flex overflow-scroll category-button-group">
                <CategoryButton categoryName="all" current={true}/>
                {categories.map(category => (
                    <CategoryButton key={category} categoryName={category} current={false}/>
                ))}
            </div>
        </section>
    )
}