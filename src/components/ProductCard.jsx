import Rating from "./Rating.jsx";
// eslint-disable-next-line react/prop-types
export default function ProductCard({product:{title, price, image, rating:{rate}}}) {

    return (
        <div className="border border-black p-5 flex flex-col items-start gap-5">
            <img src={image} className="h-40 w-" alt=""/>
            <p className="font-bold line-clamp-2">{title}</p>
            <Rating rate={rate} />
            <div className="flex justify-between items-end w-full">
                <p className="text-nowrap">Price ( $ <span>{price}</span> )</p>
                <button className="text-sm border border-black px-3 py-1">Add Cart</button>
            </div>
        </div>
    )
}