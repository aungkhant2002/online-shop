import Cart from "./Cart.jsx";
import Container from "./Container.jsx";
import {Link} from "react-router-dom";
import carts from "../data/cart.js";

export default function CartSection() {

    return (
        <>
            <div className="w-full flex flex-col gap-5 h-full">
                {carts.map((cart) => <Cart key={cart.id} cart={cart}/>)}
                <div className="absolute bottom-14 left-0 w-full bg-white">
                    <Container className={`px-5`}>
                        <div className="border-t border-black flex justify-end gap-20">
                            <div className="text-right mt-2">
                                <p className="text-gray-500">Total ($)</p>
                                <p className="text-xl font-bold">123</p>
                            </div>
                            <div className="text-right mt-2">
                                <p className="text-gray-500">Tax (10%)</p>
                                <p className="text-xl font-bold">45</p>
                            </div>
                            <div className="text-right mt-2">
                                <p className="text-gray-500">Net Total ($)</p>
                                <p className="text-2xl font-bold">456</p>
                            </div>
                        </div>
                        <div className="text-right mt-3">
                            <Link to={'/'} className="border border-black px-4 py-1">Order Now</Link>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    );
}