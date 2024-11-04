export default function CategoryButton({categoryName, current}) {
    return (
        <button className={`${current && "bg-black text-white"} border border-black px-4 py-2 me-2 text-nowrap category-button`}>{categoryName}</button>
    );
}

