import products from "../data/products.js";
import Cart from "./Cart.jsx";
import {Container} from "postcss";

export default function CartSection() {
    const carts = [
        {
            id: 1,
            product: products[1],
            quantity: 3,
            cost: 66.9,
        },
        {
            id: 2,
            product: products[6],
            quantity: 1,
            cost: 9.99,
        }
    ]
    return (
        <>
            <div className="flex flex-col gap-3">
                {carts.map((cart) => <Cart key={cart.id} cart={cart}/>)}
            </div>
        </>
    );
}