import Rating from "./Rating.jsx";
import {useNavigate} from "react-router-dom";
import useCartStore from "../store/useCartStore.js";

// eslint-disable-next-line react/prop-types
export default function ProductCard({product: {id, title, price, image, rating: {rate}}}) {
    const navigate = useNavigate();
    const {carts, addCart} = useCartStore();
    const handleAddCartBtn = (event) => {
        event.stopPropagation();
        const newCart = {
            id: Date.now(),
            productId: id,
            quantity: 1,
        }
        addCart(newCart);
    }

    const handleOpenDetail = () => {
        navigate(`/product-detail/${id}`)
    }

    const handleAddedBtn = (event) => {
        event.stopPropagation();
    }

    return (
        <div onClick={handleOpenDetail} className="border border-black p-5 flex flex-col items-start gap-5">
            <img src={image} className="h-40 w-" alt=""/>
            <p className="font-bold line-clamp-2">{title}</p>
            <Rating rate={rate}/>
            <div className="flex justify-between items-end w-full">
                <p className="text-nowrap">Price ( $ <span>{price}</span> )</p>
                {carts.find((cart) => cart.productId === id) ? (
                    <button onClick={handleAddedBtn} className="text-sm border bg-black text-white px-3 py-1">Added</button>) : (
                    <button onClick={handleAddCartBtn} className="text-sm border border-black px-3 py-1">Add Cart</button>)}
            </div>
        </div>
    )
}