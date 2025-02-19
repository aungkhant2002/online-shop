import Cart from "./Cart.jsx";
import Container from "./Container.jsx";
import {Link} from "react-router-dom";
import useCartStore from "../store/useCartStore.js";
import useProductStore from "../store/useProductStore.js";
import emptyCartImg from "../assets/empty-cart.svg";

export default function CartSection() {
    const {products} = useProductStore();
    const {carts} = useCartStore();

    const total = carts.reduce((pv, cv) => {
        const cost = cv.quantity * products.find(({id}) => id === cv.productId).price;
        return pv + cost;
    }, 0);

    const tax = total * 0.05
    const netTotal = total + tax;
    return (<>
        <div className="w-full flex flex-col gap-5 h-full">
            {carts.map((cart) => <Cart key={cart.id} cart={cart}/>)}
            {carts.length === 0 && (
                <img src={emptyCartImg} className={`h-[300px] md:h-[300px] xl:h-[420px]  block mx-auto mt-0 xl:mt-5`} alt="empty"/>
            )}
            <div className="fixed bottom-0 mb-14 left-0 w-full bg-white">
                <Container className={`px-5`}>
                    <div className="border-t border-black flex justify-end gap-20">
                        <div className="text-right mt-2">
                            <p className="text-gray-500">Total ($)</p>
                            <p className="text-xl font-bold">{total.toFixed(2)}</p>
                        </div>
                        <div className="text-right mt-2">
                            <p className="text-gray-500">Tax (10%)</p>
                            <p className="text-xl font-bold">{tax.toFixed(2)}</p>
                        </div>
                        <div className="text-right mt-2">
                            <p className="text-gray-500">Net Total ($)</p>
                            <p className="text-2xl font-bold">{netTotal.toFixed(2)}</p>
                        </div>
                    </div>
                    <div className="text-right mt-3">
                        <Link to={'/'} className="border border-black px-4 py-1">Order Now</Link>
                    </div>
                </Container>
            </div>
        </div>
    </>);
}