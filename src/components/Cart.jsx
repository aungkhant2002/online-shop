import useProductStore from "../store/useProductStore.js";
import useCartStore from "../store/useCartStore.js";

// eslint-disable-next-line react/prop-types
export default function Cart({cart: {id, productId, quantity}}) {
    const {products} = useProductStore();
    const {increaseQuantity, decreaseQuantity} = useCartStore();
    const handleIncreaseQuantity = () => {
        increaseQuantity(id);
    }
    const handleDecreaseQuantity = () => {
        decreaseQuantity(id);
    }
    const product = products.find(el=> el.id === productId);
    const cost = product.price * quantity;
    return (
        <div className="w-full border border-black p-5 grid grid-cols-6 gap-5 items-center">
            <div className="col-span-1">
                <img src={product.image} className="h-16" alt=""/>
            </div>
            <div className="col-span-3">
                <p className="text-xl font-bold mb-2">{product.title}</p>
                <p className="text-gray-500">Price ( $ {product.price} )</p>
            </div>
            <div className="col-span-1">
                <p className="mb-2 text-center">Quantity</p>
                <div className="flex justify-center items-center gap-2">
                    <button onClick={handleDecreaseQuantity} className="border px-2 py-0.5 bg-black text-white">-</button>
                    <p className="">{quantity}</p>
                    <button onClick={handleIncreaseQuantity} className="border px-2 py-0.5 bg-black text-white">+</button>
                </div>
            </div>
            <div className="col-span-1">
                <p className="text-end ms-3 md:ms-0 text-xl font-bold">{cost}</p>
            </div>
        </div>
    )
}