import Rating from "./Rating.jsx";
import {Link} from "react-router-dom";
import useCartStore from "../store/useCartStore.js";

// eslint-disable-next-line react/prop-types
export default function ProductCard({product: {id, title, price, image, rating: {rate}}}) {
    const {carts, addCart} = useCartStore();
    const handleAddCartBtn = () => {
        console.log("add to cart")
        const newCart = {
            id: Date.now(),
            productId: id,
            quantity: 1,
        }
        addCart(newCart);
    }
    return (
        <div to={`/product-detail/${id}`} className="border border-black p-5 flex flex-col items-start gap-5">
            <img src={image} className="h-40 w-" alt=""/>
            <p className="font-bold line-clamp-2">{title}</p>
            <Rating rate={rate}/>
            <div className="flex justify-between items-end w-full">
                <p className="text-nowrap">Price ( $ <span>{price}</span> )</p>
                {carts.find((cart) => cart.productId === id) ? (
                    <button className="text-sm border bg-black text-white px-3 py-1">Added</button>) : (
                    <button onClick={handleAddCartBtn} className="text-sm border border-black px-3 py-1">Add Cart</button>)}
            </div>
        </div>
    )
}