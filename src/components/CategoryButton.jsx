import useCategoryStore from "../store/useCategoryStore.js";

// eslint-disable-next-line react/prop-types
export default function CategoryButton({category: {id, name, isActive}}) {
    const {activeCategory} = useCategoryStore();
    const handleClick = ()=> {
        activeCategory(id);
    }
    return (
        <button onClick={handleClick} className={`${isActive && "bg-black text-white"} border border-black px-4 py-2 me-2 text-nowrap category-button`}>{name}</button>
    );
}
