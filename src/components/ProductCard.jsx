export default function ProductCard({product:{title, price, image, rating:{rate}}}) {
    const currentRate = rate.toFixed(0);
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(
            <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className={`size-6 stroke-yellow-500 ${i<=currentRate && "fill-yellow-500"}`}>
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
            </svg>
        )
    }
    return (
        <div className="border border-black p-5 flex flex-col items-start gap-5">
            <img src={image} className="h-40 w-" alt=""/>
            <p className="font-bold line-clamp-2">{title}</p>
            <div className="flex gap-2 mt-auto">{stars}</div>
            <div className="flex justify-between items-end w-full">
                <p className="text-nowrap">Price ( $ <span>{price}</span> )</p>
                <button className="text-sm border border-black px-3 py-1">Add Cart</button>
            </div>
        </div>
    )
}